---
title: Setup Fastlane with CircleCI
layout: post
date: '2016-08-24 08:25:00 +0900'
tags: fastlane
comments: true
---

I'd like to introduce my Fastlane's setup with CircleCI. What I wanted to do is to deploy release build in CircleCI automatically when merging a certain branch.
Let's take a look at how to set up.

Here is `circle.yml`. I temporarily replace a real name with \*\*\*. Keep in mind that you need to adjust it by your environments.

{% gist pixyzehn/1ed5e44080db799f5b58c30406ccd29f %}

In iOS projects, we cannot change parallelism like this. (Android can change.)

![Parallelism]({{ site.url }}/assets/error-parallelism.png){:height="75px"}

I plan to deploy when merging release branch. It depends on situations. The above script takes a time(15min ~ 20min) for my project, so It may be better to improve the slowness.

There are references that are useful for me.

- [Test iOS applications on OS X](https://circleci.com/docs/ios-builds-on-os-x/){:target="_blank"}
- [Set up code signing for iOS projects](https://circleci.com/docs/ios-code-signing/){:target="_blank"}
- [Fastlane failed to run pod install](https://discuss.circleci.com/t/fastlane-failed-to-run-pod-install/3873){:target="_blank"}
- [Use match for enterprise codesigning](https://github.com/fastlane/fastlane/issues/2007){:target="_blank"}

---

Let's move to next setting.

This is `Fastfile` in Fastlane.
I use [Firebase](https://firebase.google.com/){:target="_blank"} for push notifications, so I need to set each parameters for a production in GoogleService-Info.plist.

{% gist pixyzehn/33997f7f9caef5576242cc74aeb386f0 %}

In the above setting, you can deploy release build by `bundle exec fastlane ios deploy`. This is why I set this command in `circle.yml`.

I often refer to this [Fastlane examples](https://github.com/fastlane/examples){:target="_blank"} used in a real project. For me, [Fitbay's Fastfile](https://github.com/fastlane/examples/blob/master/Fitbay/Fastfile){:target="_blank"} helps me a lot.

I think there are some workaround like `cocoapods(use_bundle_exec: !is_ci)` and `use_legacy_build_api: true`. I hope these will be improved in near future.
Don't forget to set a `rocket` action for sure. I'm afraid there are too many `is_ci` flag for avoiding errors in CI build.

There are references that are useful for me.

- [Fastlane Action](https://github.com/fastlane/fastlane/blob/master/fastlane/docs/Actions.md){:target="_blank"}
- [Code Signing Guide for Teams](https://codesigning.guide/){:target="_blank"}

I could see many detailed documents in Fastlane. I recommend to see them.

- [Fastlane Documentation](https://github.com/fastlane/fastlane/tree/master/fastlane/docs){:target="_blank"}

Happy development with Fastlane and CircleCI:) :rocket:
