---
layout: post
title: "Swifty Week 5"
date: 2016-12-24 16:46:00 +0900
tags: swiftyweek
comments: true
published: false
---

Hello, there. this is the **#5** article. The next article might be delayed for holidays. I have many `Random` articles more than usual in this article. If you miss the news about [Supporting App Transport Security](https://developer.apple.com/news/?id=12212016b) from Apple, you should see. If I ship an article every week in next year, the number of articles will be **#57** (52 + 5). This is my goal in next year!  
Best wishes for the holidays and New Year.

<br>

---

### Article

#### [Logic Programming in Swift](http://matt.diephouse.com/2016/12/logic-programming-in-swift/)

> Logic programming is a form of declarative programming that describes the solution instead of the calculation. Based on that description, the computer solves the problem. Describing a solution to a problem can be a far easier than devising a method to solve it, which is why logic programming can be appealing.

I didn't know about the concept of **Logic Programming**. It's interesting for me.

<br>

#### [RxSwift Primer: Part3](https://www.caseyliss.com/2016/12/19/rxswift-primer-part-3), [Part4](https://www.caseyliss.com/2016/12/20/rxswift-primer-part-4), [Part5](https://www.caseyliss.com/2016/12/21/rxswift-primer-part-5)

> We’ve now had a big win and removed all stored state in our ViewController. Next time, we’ll take things a little bit further, and leverage one of the higher order classes that RxCocoa makes available to us: the Driver. We’ll also clean things up a bit, and then take stock of where we’ve landed.

Great resources for RxSwift. In my previous article, I introduced [Part1](https://www.caseyliss.com/2016/12/15/rxswift-primer-part-1) and [Part2](https://www.caseyliss.com/2016/12/16/rxswift-primer-part-2). You can learn through a real experience.

<br>

#### [SwiftLint 0.14 is out: CocoaPods installs, Linux support, and more!](https://realm.io/news/swiftlint-0-14-rules-cocoapods-swiftpm-linux/)

> We released SwiftLint 0.14 over the weekend, and it’s probably our biggest release yet! We added 14 new rules, and shipped CocoaPods, SwiftPM, and Linux support. We’ll dive into the rule changes first, and then explore the optimizations we made to keep the SwiftLint platform useful as Swift continues to grow and change.
We’ve marked the locations of errors and warnings with arrows (↓) so you can see without having to run these snippets yourself!

There are so many new rules! Redundant String Enum is what I wanted.

```swift
enum Numbers: String {
  case one = ↓"one", case two = ↓"two" // warning!!
  // and
  case one = ↓"one", two = ↓"two" // warning!!
  // and even
  case one, two = ↓"two" // warning!!
}
```

<br>

#### [Batch Updating of Constraints](http://useyourloaf.com/blog/batch-updating-of-constraints/)

> In this post I want to be sure to show the alternative, mention a Swift bug that might bite you and what is perhaps a more pragmatic reason to prefer the batch approach.

I hope Apple modify a kind of tricky bug.

<br>

#### [Swift Style Guide Updated for Swift 3](https://www.raywenderlich.com/148830/swift-style-guide-updated-for-swift-3?utm_source=raywenderlich.com+Weekly&utm_campaign=1c1b1c3cbb-raywenderlich_com_Weekly11_29_2016&utm_medium=email&utm_term=0_83b6edc87f-1c1b1c3cbb-415115149)

> Here at raywenderlich.com, we want to have a consistent style for you in our tutorials, books, videos, and conference materials. We believe it improves readability, and makes our content easier and quicker to understand. Our style guide helps us accomplish this.
This update resolves dozens of issues and enhancements from the community since our last update in April.
Let’s look at some of the highlights in this latest update.

@rayfix updated Swift Style Guide for Swift3.0. I totally agree with this style except for **indent using 2 spaces**.

<br>

#### [Emoji 4.0](https://oleb.net/blog/2016/12/emoji-4-0/)

> While many of the new emoji, such as fox face 🦊 and avocado 🥑, are indeed just plain old emoji consisting of a single code point, others are so-called emoji ZWJ sequences, formed by multiple code points. These primarily encompass new gendered emoji for professions, such as firefighter 👩‍🚒👨‍🚒, farmer 👩‍🌾👨‍🌾, and the “David Bowie memorial” singer emoji 👩‍🎤👨‍🎤.

Apple introduced new emojis from iOS10.2 and macOS 10.12.2. I was able to learn a lot of things from emojis.

<br>

#### [Yelling NotificationCenter.post(name:object:) in a crowded theatre](http://www.apokrupto.com/blog-1/2016/12/9/yelling-notificationcenterpostnameobject-in-a-crowded-theatre)

> A completely uncoupled architecture just isn't realistic.  
...  
We can create an intermediate object that exists in between the model and the view that coordinates the changes. The model yells out something has happened, the intermediate object knows what that means, and informs the view.

He took calling an ambulance as an example. He applied the coordinator pattern for Notification like a NotificationCoordinator.

<br>

---

### Slide

[HubFramework](https://www.youtube.com/channel/UCbGWE1KhLNk1bbeezaC501w) 's tutorial by Youtube.

> Hub Framework Sessions is a series of videos aimed at giving developers a quick introduction to some of the concepts of the framework.

This is the Spotify’s component-driven UI framework for iOS https://spotify.github.io/HubFramework.

<br>

[Localization is hard](http://www.thedotpost.com/2016/01/roy-marmelstein-localization-is-hard#autoplay)

> Tailoring apps to users from over 150 countries with different languages, cultures and formatting rules is hard and often overlooked by developers. Roy takes us on a journey around the world in search of the strange and wonderful, uncovering many tools provided by iOS to make global users feel at home.

If you work on localization, you should check it.

<br>

---

### Github

[koher/ListK](https://github.com/koher/ListK)

> Simple lazy lists for Swift

[brianmichel/Juice](https://github.com/brianmichel/Juice)

> Make your battery information a bit more interesting.

<br>

---

### Random

#### [Stroustrup's Rule and Layering Over Time](https://thefeedbackloop.xyz/stroustrups-rule-and-layering-over-time/)

> Programming language experts like to claim that syntax doesn't matter, that semantics is all that counts. Don't believe them! They're overrotating on a common, pre-rigorous misunderstanding of language design as superficially aesthetic. The study of semantics does provide deep insights into the mechanics of languages—but the mechanism is not the mental model. Design requires engaging with the way people express their programs, and syntax is a "tool of thought".

<br>

#### [Solve Problems, not Strawmen](https://robots.thoughtbot.com/you-aint-gonna-need-process)

> Applying solutions within a vacuum – for example, reading about VPNs and then deciding to implement one for your team, without having a strong driving impetus – has a few downsides. Skipping the problem statement makes it difficult to measure whether the solution works or how to iterate on it. It also runs the risk of decreasing team happiness when solutions are not tethered to reality.

<br>

#### [Mastering Programming](https://m.facebook.com/notes/kent-beck/mastering-programming/1184427814923414?__s=ptag773ks2wxoqvv2ewe)

> From years of watching master programmers, I have observed certain common patterns in their workflows. From years of coaching skilled journeyman programmers, I have observed the absence of those patterns. I have seen what a difference introducing the patterns can make.

Kent Beck's post in Facebook!

<br>

#### [Your Git Log Should Tell A Story](http://www.mokacoding.com/blog/your-git-log-should-tell-a-story/)

> Writing informative commits goes hand in hand with making your commits small and atomic, and knowing how to perform an interactive rebase can help a lot to keep the history tidy. We will look at these topics in the upcoming posts, so stay tuned.

I write a story also for the sake of my own.

<br>

#### [One Sure-Fire Way to Improve Your Coding](https://changelog.com/posts/one-sure-fire-way-to-improve-your-coding)

> If you want to dramatically increase your programming skills you need to be reading other people’s code.

<br>

#### [Who will I work with?](http://www.upbeat.it/2016/12/12/who-will-i-work-with/?utm_content=buffer832bc&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer)

> My preferred is “who will I work with?”. Nobody has been able to clearly answer it in my case. Some replies I got were:

That's an interesting question for me. I'll try to ask if I have a chance.

<br>

---

### Podcast

#### [182 iPS Swift Style with Erica Sadun](https://devchat.tv/iphreaks/182-ips-swift-style-with-erica-sadun)

I always look forward to listening their picks!

<br>

#### [#58: Prerelease Testing](https://www.relay.fm/radar/58)

> How we test our apps before release.

They talked about how they test their application. This talk looks useful especially for indie developers.

<br>

#### [Episode 263: The Writing-off-December Club](http://www.coreint.org/2016/12/episode-263-the-writing-off-december-club/)

> Daniel asks Manton for the latest on his Micro.blog Kickstarter plans, discuss the merits of waiting to ship until after the holidays, and the discipline that waiting requires. They go on to talk about macOS 10.12.2 and the challenges that even minor OS updates can bring when maintaining existing apps.

<br>

---

If you have any questions and feedbacks about a kind of new Swifty week, feel free to ask me :+1:
You can catch me on [Twitter](https://twitter.com/pixyzehn){:target="_blank"} and [Github](https://github.com/pixyzehn){:target="_blank"}.

Have a lovely week <3
