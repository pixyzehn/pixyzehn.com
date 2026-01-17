---
title: Setup Fastlane with CircleCI
date: 2016-08-24
tags: fastlane
---

I'd like to introduce my Fastlane's setup with CircleCI. What I wanted to do is to deploy release build in CircleCI automatically when merging a certain branch.
Let's take a look at how to set up.

Here is `circle.yml`. I temporarily replace a real name with \*\*\*. Keep in mind that you need to adjust it by your environments.

<script src="https://gist.github.com/pixyzehn/1ed5e44080db799f5b58c30406ccd29f.js"></script>

In iOS projects, we cannot change parallelism like this. (Android can change.)

<img src="/assets/posts/error-parallelism.png" alt="Parallelism" height="75">

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

<script src="https://gist.github.com/pixyzehn/33997f7f9caef5576242cc74aeb386f0.js"></script>

In the above setting, you can deploy release build by `bundle exec fastlane ios deploy`. This is why I set this command in `circle.yml`.

I often refer to this [Fastlane examples](https://github.com/fastlane/examples) used in a real project. For me, [Fitbay's Fastfile](https://github.com/fastlane/examples/blob/master/Fitbay/Fastfile) helps me a lot.

I think there are some workaround like `cocoapods(use_bundle_exec: !is_ci)` and `use_legacy_build_api: true`. I hope these will be improved in near future.
Don't forget to set a `rocket` action for sure. I'm afraid there are too many `is_ci` flag for avoiding errors in CI build.

There are references that are useful for me.

- [Fastlane Action](https://github.com/fastlane/fastlane/blob/master/fastlane/docs/Actions.md)
- [Code Signing Guide for Teams](https://codesigning.guide/)

I could see many detailed documents in Fastlane. I recommend to see them.

- [Fastlane Documentation](https://github.com/fastlane/fastlane/tree/master/fastlane/docs)

Happy development with Fastlane and CircleCI:) 🚀
