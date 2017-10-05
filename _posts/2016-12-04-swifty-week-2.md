---
layout: post
title: "Swifty Week 2"
date: 2016-12-04 10:08:00 +0900
tags: swiftyweek
comments: true
published: false
---

Hi, there! This is the second Swifty Week post. So far I don't know how many people are looking forward to seeing the article in the `#swiftyweek`, but I'll continue to wrap up an interesting topic. After finishing the first article in `#swiftyweek`, I came to feel like learning something more than usual.

Surprisingly, I could find many users from Russia by analytics :grin:

<br>

---

### Article

#### [Date Math is Hard, Let's Do it Tomorrow](http://www.atomicbird.com/blog/date-math-is-hard-lets-do-it-tomorrow){:target="_blank"}

> [NS]Calendar is your friend and will gladly help you out here. In iOS 8 it gained a bunch of useful new methods, too, so I recommend looking closely at the docs.

If you work on a global app(or it has complicated date and time calculations), you should check the article! In my opinion, a test is really important in Date and Time.

<br>

#### [CollectionOfOne](https://swiftunboxed.com/open-source/CollectionOfOne/){:target="_blank"}

> Today’s goal: understand collection types in Swift a little better. I wanted to start with the simplest one in the standard library: CollectionOfOne. As the name suggests, this is a collection that holds a single element.
...
You can gain some efficiencies by using CollectionOfOne instead of a full-blown array.

This is the explanation of `CollectionOfOne` that is the simplest one of collection types in the standard library. If you interested in the more details, you can check the full source code.

<br>

#### [IteratorOverOne](https://swiftunboxed.com/open-source/IteratorOverOne/){:target="_blank"}

> There’s one more important thing you can do with collection types: iterate over them. CollectionOfOne has a corresponding IteratorOverOne that we’ll dig into for this short follow-up post.

This is the next version of `CollectionOne`. If you like the above article, you'll be fond of `IteratorOverOne`. Thanks to protocol extensions, these protocols can get many methods and properties for free.

<br>

#### [Paleo App Dieting](http://www.alexcurylo.com/2016/11/18/paleo-app-dieting/){:target="_blank"}

> No doubt you’re aware that bigger is not better for downloads on the App Store, especially if you hit the dreaded 100 MB cellular download limit, but were you aware that even if you haven’t there’s a marked disadvantage to download size increasing? Well, here it’s quantified by way of Actual Real Life Experiment

If you have a mission to reduce the app size capacity, I recommend to seeing this!

<br>

#### [Why Swift is swift](https://www.skilled.io/purpleyay/why-swift-is-swift?utm_campaign=Algorithms%2BNews&utm_medium=email&utm_source=Algorithms_News_11){:target="_blank"}

> Swift can speed up dynamic dispatch from Objective-C by using vtables because it has this type safety where when you instantiate something, it's either a parent or a subclass of that.

To digging into an internal Swift is really fun.

<br>

#### [Refresh Control Changes in iOS 10](http://useyourloaf.com/blog/refresh-control-changes-in-ios-10/){:target="_blank"}

> Apple first added the pull-to-refresh style user interface control way back in iOS 6. Unfortunately it only worked with a table view controller. You were out of luck if you wanted to use it with a plain scroll view or collection views. After a long wait Apple enthusiastically announced at WWDC 2016 that iOS 10 was bringing refresh controls to the scroll view and by inheritance to table and collection views. This post walks you through what you need to know.

I know the fact, but I never tried a refresh controls in the scroll view in iOS10. Looks good :+1:

<br>

#### [The RawRepresentable Protocol in Swift](https://oleb.net/blog/2016/11/rawrepresentable/?utm_campaign=This%2BWeek%2Bin%2BSwift&utm_medium=web&utm_source=This_Week_in_Swift_112){:target="_blank"}

> The raw value syntax for enums in Swift is “just” a shorthand for conformance to the RawRepresentable protocol. It’s easy to add this manually if you want to use otherwise unsupported types as raw values.

<br>

#### [Typed Notifications (Part 1)](https://talk.objc.io/episodes/S01E27-typed-notifications-part-1){:target="_blank"}

> We build a lightweight generic wrapper around Foundation's notification API. This allows us to abstract away common boilerplate code and to work with a type-safe interface.

Their way is really cool. I'm looking forward to the next part.

<br>

#### [QUICK GUIDE: ANIMATIONS WITH UIVIEWPROPERTYANIMATOR](http://www.thinkandbuild.it/quick-guide-animations-with-uiviewpropertyanimator/){:target="_blank"}

> With iOS 10 came a bunch of new interesting features, like the UIViewPropertyAnimator, a brand new class that improves animation handling.
The view property animator completely changes the flow that we are used to, adding a finer control over the animations logic.

I didn't catch up the animation API around `UIViewPropertyAnimator`. It's time to learn.

<br>

#### [Testing Without Xcode: It's Everywhere You Want to Be](https://realm.io/news/cmdu-fuller-testing-without-xcode/){:target="_blank"}

> Now that Swift is available on many platforms, how can developers use testing frameworks outside of Xcode to their advantage? In this CMD+U Conference talk, Kyle Fuller discusses a variety of possible approaches.

<br>

#### [bliki: FunctionLength](http://martinfowler.com/bliki/FunctionLength.html){:target="_blank"}

> Small functions like this only work if the names are good, so you need to pay good attention to naming. This takes practice, but once you get good at it, this approach can make code remarkably self-documenting. Larger scale functions can read like a story, and the reader can choose which functions to dive into for more detail as she needs it.

It's not related to Swift directly. But it worths reading for me.

<br>

---

### Github

[bradhilton/SwiftKVC](https://github.com/bradhilton/SwiftKVC){:target="_blank"}

> Key-Value Coding (KVC) for native Swift classes and structs

[pixyzehn/EsaKit](https://github.com/pixyzehn/EsaKit){:target="_blank"} (Actually, I made it :star2:)

> A Swift framework for the esa.io API https://esa.io/

[johnno1962/RefactoratorApp](https://github.com/johnno1962/RefactoratorApp){:target="_blank"}

> App version of Refactorator plugin

[rnystrom/SimpleWeather](https://github.com/rnystrom/SimpleWeather){:target="_blank"}

> A personal weather app I'm building in the open.

I think this is a good example of using `IGListKit`.

<br>

---

### Random

#### [Talking and Teaching](http://robnapier.net/talking){:target="_blank"}

> I don’t know how it is for most speakers, but for me, preparing a talk is very difficult. It took me nearly five months to develop my talk for try! Swift. I completely rewrote it four times and practiced it for weeks.

Five months :scream:

<br>

#### [Get Your Apps Ready for the Holidays](https://developer.apple.com/news/?id=11292016a&utm_campaign=iOS%2BDev%2BWeekly&utm_medium=email&utm_source=iOS_Dev_Weekly_Issue_279){:target="_blank"}

Don't forget the news :dash:

<br>

---

Finally, I found a really cool Podcast called [More Than Just Code Podcast](http://mtjc.fm/episode-120-where-do-you-draw-the-line/){:target="_blank"}. If you like like this kind of Podcast, see the [my list](http://pixyzehn.com/2016/08/02/my-favorite-podcasts.html){:target="_blank"}.

Unfortunately, [iOhYes](http://5by5.tv/iohyes){:target="_blank"} that is the one of my favorite Podcasts finished recently :cry:

If you have any questions and feedbacks about a kind of new Swifty week, feel free to ask me :+1:
You can catch me on [Twitter](https://twitter.com/pixyzehn){:target="_blank"} and [Github](https://github.com/pixyzehn){:target="_blank"}.

Have a lovely week <3
