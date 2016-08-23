---
layout: post
title: "Setup Fastlane with CircleCI"
date: 2016-08-24 08:22:00 +0900
tags: fastlane
comments: true
---

I'd like to introduce my setup Fastlane with CircleCI.

Here is `circle.yml`. I replace a real name of \*\*\*.
```yml
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

I plan to deploy when merging release branch. It depends on situations. The above script takes a time(15min ~ 20min), so It may 
