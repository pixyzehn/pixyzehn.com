---
layout: post
title: "Setup Fastlane with CircleCI"
date: 2016-08-24 08:25:00 +0900
tags: fastlane
comments: true
---

I'd like to introduce my Fastlane's setup with CircleCI. What I wanted to do is to deploy release build in CircleCI automatically when merging a certain branch.
Let's take a look at how to set up.

Here is `circle.yml`. I temporarily replace a real name with \*\*\*. Keep in mind that you need to adjust it by your environments.

```ruby
machine:
  timezone: Asia/Tokyo
  xcode:
    version: 7.3
  environment:
    XCODE_SCHEME: ***
    XCODE_WORKSPACE: ***.xcworkspace
    GYM_CODE_SIGNING_IDENTITY: 'iPhone Distribution: ***. (***)'
dependencies:
  cache_directories:
    - 'vendor/bundle'
    - 'Pods'
    - '~/.cocoapods'
  override:
    - bundle install -j4 --path=vendor/bundle
    - pod install:
        timeout: 300
deployment:
  release:
    branch: release
    commands:
      - bundle exec fastlane ios deploy
test:
  override:
    - set -o pipefail &&
      xcodebuild
        CODE_SIGNING_REQUIRED=NO
        CODE_SIGN_IDENTITY=
        PROVISIONING_PROFILE=
        -sdk iphonesimulator
        -destination 'platform=iOS Simulator,OS=9.0,name=iPhone 6'
        -workspace ***.xcworkspace
        -scheme "***"
        clean build test |
      tee $CIRCLE_ARTIFACTS/xcode_raw.log |
      xcpretty --color --report junit --output $CIRCLE_TEST_REPORTS/xcode/results.xml

```

In iOS projects, we cannot change parallelism like this. (Android can change.)

![Parallelism]({{ site.url }}/assets/error-parallelism.png){:height="75px"}

I plan to deploy when merging release branch. It depends on situations. The above script takes a time(15min ~ 20min) for my project, so It may be better to improve the slowness.

There are references that are useful for me.

- [Test iOS applications on OS X](https://circleci.com/docs/ios-builds-on-os-x/)
- [Set up code signing for iOS projects](https://circleci.com/docs/ios-code-signing/)
- [Fastlane failed to run pod install](https://discuss.circleci.com/t/fastlane-failed-to-run-pod-install/3873)
- [Use match for enterprise codesigning](https://github.com/fastlane/fastlane/issues/2007)

---

Let's move to next setting.

This is `Fastfile` in Fastlane.
I use [Firebase](https://firebase.google.com/) for push notifications, so I need to set each parameters for a production in GoogleService-Info.plist.

```ruby
fastlane_version "1.100.0"
default_platform :ios

platform :ios do
  before_all do
    ENV["SLACK_URL"] = "https://hooks.slack.com/services/***"
    ENV['CRASHLYTICS_API_TOKEN'] = "***"
    ENV['CRASHLYTICS_BUILD_SECRET'] = "***"
    if !is_ci
      ensure_git_status_clean
    end
    cocoapods(use_bundle_exec: !is_ci) # Ref: https://discuss.circleci.com/t/fastlane-failed-to-run-pod-install/3873/7
    if is_ci
      # For preventing build number duplication error.
      increment_build_number({
        build_number: latest_testflight_build_number + 1
      })
    else
      increment_build_number
    end
  end

  after_all do
    if !is_ci
      push_to_git_remote
    end
  end

  error do |lane, exception|
    if is_ci
      slack(
        message: "'#{exception.message}'. Fastlane '#{lane}' errored",
        success: false
      )
    end
  end

  # Public lane

  lane :dev do
    fabric(scheme: "*** dev")
  end

  lane :staging do
    fabric(scheme: "*** staging")
  end

  lane :qa do
    fabric(scheme: "*** QA")
  end

  lane :release do
    itc_testflight(scheme: "***")
  end

  lane :deploy do
    itc(scheme: "***")
  end

  # Private lane

  private_lane :fabric do |options|
    scheme = options[:scheme]
    sigh(
      skip_install: true,
      development: true
    )
    build(scheme: scheme)
    environment = scheme.upcase
    crashlytics(
      ipa_path: "../***.ipa",
      notes: "Running on #{environment}"
    )
    rocket
    post_to_slack(scheme: scheme, destination: "Crashlytics")
    clean_build_artifacts
    commit_version
  end

  private_lane :itc_testflight do |options|
    scheme = options[:scheme]
    sigh(
      skip_install: true,
      development: false,
    )
    build(scheme: scheme)
    pilot(
      ipa: "../***.ipa",
      skip_submission: true,
    )
    rocket
    post_to_slack(scheme: scheme, destination: "TestFlight")
    clean_build_artifacts
    commit_version
  end

  private_lane :itc do |options|
    ensure_git_branch(branch: 'release')
    scheme = options[:scheme]
    sigh(
      skip_install: true,
      development: false,
    )
    build(scheme: scheme)
    deliver(force: true)
    rocket
    post_to_slack(scheme: scheme, destination: "iTunes Connect")
    if !is_ci
      clean_build_artifacts
      commit_version
      add_tag_and_push
    end
  end

  # Util lane

  private_lane :set_google_info_plist_value do |options|
    # Please set env-vars in CircleCI
    path = './***/Resources/GoogleService-Info.plist'
    set_info_plist_value(path: path, key: 'CLIENT_ID', value: "$(PRODUCT_CLIENT_ID)")
    set_info_plist_value(path: path, key: 'REVERSED_CLIENT_ID', value: "$(PRODUCT_REVERSED_CLIENT_ID)")
    set_info_plist_value(path: path, key: 'API_KEY', value: "$(PRODUCT_API_KEY)")
    set_info_plist_value(path: path, key: 'GCM_SENDER_ID', value: "$(PRODUCT_GCM_SENDER_ID)")
    set_info_plist_value(path: path, key: 'BUNDLE_ID', value: "jp.***.iOS")
    set_info_plist_value(path: path, key: 'PROJECT_ID', value: "***")
    set_info_plist_value(path: path, key: 'STORAGE_BUCKET', value: "***.appspot.com")
    set_info_plist_value(path: path, key: 'IS_APPINVITE_ENABLED', value: "YES")
    set_info_plist_value(path: path, key: 'GOOGLE_APP_ID', value: "$(PRODUCT_GOOGLE_APP_ID)")
    set_info_plist_value(path: path, key: 'DATABASE_URL', value: "https://***.firebaseio.com")
  end

  private_lane :build do |options|
    scheme = options[:scheme]
    gym(
      scheme: "#{scheme}",
      clean: true,
      silent: true,
      include_bitcode: false,
      workspace: "***.xcworkspace",
      output_directory: "../",
      output_name: "***.ipa",
      use_legacy_build_api: true # There's a bug in the new Xcode 7 API that causes problems. This forces use of the old API.
    )
  end

  private_lane :post_to_slack do |options|
    scheme = options[:scheme]
    version = get_version_number(xcodeproj: "***.xcodeproj")
    build = get_build_number(xcodeproj: "***.xcodeproj")
    environment = scheme.upcase
    destination = options[:destination]
    slack(
      message: "New :ios: *#{version}* (#{build}) running `#{environment}` has been submitted to *#{destination}*  :rocket:",
    )
  end

  private_lane :commit_version do
    build = Actions.lane_context[Actions::SharedValues::BUILD_NUMBER]
    commit_version_bump(
      message: "Build #{build}",
      force: true
    )
  end

  private_lane :add_tag_and_push do
    version = get_version_number(xcodeproj: "***.xcodeproj")
    add_git_tag(tag: version)
    push_git_tags
  end
end
```

In the above setting, you can deploy release build by `bundle exec fastlane ios deploy`. This is why I set this command in `circle.yml`.

I often refer to this [Fastlane examples](https://github.com/fastlane/examples) used in a real project. For me, [Fitbay's Fastfile](https://github.com/fastlane/examples/blob/master/Fitbay/Fastfile) help me a lot.

I think there are some workaround like `cocoapods(use_bundle_exec: !is_ci)` and `use_legacy_build_api: true`. I hope these will be improved in near future.
Don't forget to set a `rocket` action for sure. I'm afraid there are too many `is_ci` flag for avoiding errors in CI build.

There are references that are useful for me.

- [Fastlane Action](https://github.com/fastlane/fastlane/blob/master/fastlane/docs/Actions.md)
- [Code Signing Guide for Teams](https://codesigning.guide/)

I could see many detailed documents in Fastlane. I recommend to see them.

Happy development with Fastlane and CircleCI:) :rocket:
