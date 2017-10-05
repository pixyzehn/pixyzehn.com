---
layout: post
title: "Swifty Week 9"
date: 2017-01-21 21:35:00 +0900
tags: swiftyweek
comments: false
published: false
---

This is the **#9** article. I now work on a small private project with Realm. I wrote [ViewModel with Realm Notifications](https://pixyzehn.com/2017/01/21/viewmodel-with-realm-notifications.html). The result is so far so good. I could write tests easily.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Tried to use this kind of structure with realm. So far so good. <a href="https://t.co/qvSVkYsvvG">pic.twitter.com/qvSVkYsvvG</a></p>&mdash; Hiroki Nagasawa (@pixyzehn) <a href="https://twitter.com/pixyzehn/status/822713323485466625">January 21, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Let's move on today's topic as usual!

If you'd like to see markdown, you can look at [here](https://github.com/pixyzehn/pixyzehn.github.io/blob/master/_posts/2017-01-21-swifty-week-9.md).

<br>

---

### Article

#### [Naming Things in Swift](https://ashfurrow.com/blog/naming-things-in-swift/?utm_campaign=iOS%2BDev%2BWeekly&utm_medium=email&utm_source=iOS_Dev_Weekly_Issue_284)

> Swift has been around long enough that it’s started to develop idioms that code should generally adhere to. The creators of Swift have been kind enough to release official API design guidelines which are an excellent read. These are great, but I want more: I want to talk about how to develop an intuition about idiomatic Swift. We’re going to cover intutively naming things in detail, then move onto a discussion of language features.

<br>

#### [The Case for Deprecating UITableView](https://pspdfkit.com/blog/2017/the-case-for-deprecating-uitableview/)

> There's no need to manically replace all your table views with collection views, but it's time for Apple to offer API to allow collection views to be used like table views, so we all can make better apps with less code that are more flexible in this multi-size screen world. At PSPDFKit we try hard to structure our API just like Apple would, so we'll keep most of our table views for now, but we'd be the first to adopt the new layout once it becomes available

<br>

#### [Protocol oriented image picker](https://theswiftdev.com/2017/01/19/protocol-oriented-image-picker/)

> Using the UIImagePickerController is pretty straightforward. The problem starts, when you have multiple controllers, and you need the picking ability in both of them. You can make a parent class with the core functionality, but that's old-school for a Swift developer, isn't it?

<br>

#### [Statically-Typechecked Duck Types in Swift](https://www.dzombak.com/blog/2017/01/Statically-Typechecked-Duck-Types-in-Swift.html)

> tl;dr, added on 19 January: we can use protocols to substitute one type for another in Swift. In some cases it would make sense to let the programmer say “these types are interchangeable here” and let the compiler work out what that protocol would need to look like (and enforce conformance), instead of forcing the programmer to write that protocol manually.

<br>

#### [Adaptive text styles](http://ilya.puchka.me/adaptive-text-styles/)

Here is his [Adaptive Font styles](https://gist.github.com/ilyapuchka/d363c7307233f33708e5eaf1a2b19ce2).

<br>

#### [Testing and mocking without OCMock](http://www.jessesquires.com/testing-without-ocmock/)

> OCMock is a powerful mock object unit testing library for Objective-C. Even if you are using Swift, as long as your classes inherit from NSObject, you can use some of its features. But what if you are writing pure Swift code which does not have access to the dynamic Objective-C runtime? Or, what if you don’t want your Swift code to be hampered by NSObject subclasses and @objc annotations? Perhaps, you merely want to avoid dependencies and use ‘plain old’ XCTest with Objective-C. It’s relatively easy and lightweight to achieve the same effect in some testing scenarios without using OCMock.

<br>

#### [UIStackView: A Field Guide](https://medium.com/the-traveled-ios-developers-guide/uistackview-a-field-guide-c1b64f098f6d#.j8cyuohr7)

> Don’t ever be discouraged if something simple becomes complicated in execution for you. Sometimes, the best APIs arrive in such a state. I’ve come to heavily rely on stack views wherever I use Auto Layout, and they live up to the billing. Things are easier to make, faster to prototype and effortless to maintain.

And this is another article related to UIStackView, [Let's Build UIStackView](https://kean.github.io/blog/lets-build-uistackview).

<br>

#### [Improving Optionals](http://www.russbishop.net/improving-optionals)

> Optionals are great. I've tracked down too many bugs to Objective-C's magical "messages to nil return nil"; I have no interest in going back. But sometimes there are things you want to do with optionals or when optionals are of a specific type. Here are some of my favorites:

<br>

#### [Breaking Down Type Erasure in Swift](https://www.bignerdranch.com/blog/breaking-down-type-erasure-in-swift/)

> As a fan of strongly typed programming languages, I love relying on the type system to catch common mistakes and typos early. Occasionally, though, I want to relax the strict rules to gain the payoff of flexibility over safety. Just like a rubber eraser is used to remove written material, a concept known as Type Erasure can be used to remove type information from a program.

Ref:  

- [Keep Calm and Type Erase On](https://realm.io/news/tryswift-gwendolyn-weston-type-erasure/)
- [bignerdranch/type-erasure-playgrounds](https://github.com/bignerdranch/type-erasure-playgrounds)
- [Swift: Attempting to Understand Type Erasure](https://www.natashatherobot.com/swift-type-erasure/)

<br>

#### [Working with Asynchronous Objective-C APIs in Swift](https://oleb.net/blog/2017/01/result-init-helper/)

> Many asynchronous Objective-C APIs pass you two optional values in their completion handler: one for the method’s result if the operation was a success, and an error value in case the operation failed.

<br>

#### [A Sneak Peak at String in Swift 4](http://digitalleaves.com/blog/2017/01/a-sneak-peak-at-string-in-swift-4/)

> String in Swift is broken. Utterly. Completely broken. Seriously. I think Apple engineers should start from scratch and come up with something truly intuitive and easy to use. Come on! If Java, Javascript, Perl, Ruby, etc can do it, certainly Apple engineers can too.

I hope they improve in near future.  
Ref: [[swift-evolution] Strings in Swift 4](https://lists.swift.org/pipermail/swift-evolution/Week-of-Mon-20170116/030497.html)

<br>

---

### Slide

#### [Result Oriented Development](https://realm.io/news/tryswift-saul-mora-result-oriented-development/)

> When Saul Mora last talked about functional programming, we saw by using small, micro functions, a nasty, complex and hard to track function could eventually be written as a pipeline of smaller functions. But using only optionals to pipe functions together is not enough to take full advantage of this technique. This try! Swift NYC talk shows how, with the help of a small but useful Monad called Result (or Either), you can take your functional programming powers to the next level.

<br>

#### [Testing in Swift: Protocols & View Models](https://realm.io/news/testing-in-swift-protocols-and-view-models/)

> Testing is something that usually gets put in the back burner for a variety of reasons. It’s thought of being too difficult or time consuming, and some developers may be too lazy to include tests. I’d like to focus it on two different techniques to make testing easier without diminishing the quality of code: view models and protocols.

<br>

#### [Mastering Realm Notifications](https://realm.io/news/meetup-jp-simard-mastering-realm-notifications/)

> Realm takes a reactive, Objects-as-APIs approach to dealing with data. In this Realm Meetup talk, JP Simard goes over tips and tricks for building a variety of user interactions by building off a few primitive Realm notification concepts. We’ll cover Interface-Driven Writes, asynchronous versus synchronous query computation, how to architect your app to handle changes that can occur at arbitrary times, and how all of this ties into the Realm Mobile Platform.

<br>

---

### Github

#### [radex/RxExperiments](https://github.com/radex/RxExperiments)

> Artifacts from my RxSwift learning process

<br>

#### [ilyapuchka/Dependency-Injection-in-Cocoa](https://github.com/ilyapuchka/Dependency-Injection-in-Cocoa)

> Materials for talk "Dependency Injection in Cocoa"

<br>

#### [JohnSundell/Files](https://github.com/JohnSundell/Files)

> A nicer way to handle files & folders in Swift

<br>

#### [linkedin/bluepill](https://github.com/linkedin/bluepill)

> Bluepill is a reliable iOS testing tool that runs UI tests using multiple simulators on a single machine

<br>

---

### Random

#### [Swift Evolution Status Page Now Available](https://swift.org/blog/swift-evolution-status-page/)

> We’re pleased to announce the release of the new Swift Evolution status page as a one-stop destination for information about proposed changes to Swift.

Actual site is here. [apple.github.io/swift-evolution](https://apple.github.io/swift-evolution/). Cool!

<br>

#### [Seniority](http://merowing.info/2017/01/seniority/)

> Being a good developer and team member is about so much more than programming. With years you can gain much technical experience, but if you do not invest time and energy into improving your soft skills, you can create a bottleneck for your career, one that you might not even see.

Thank you for good advice. It's worth reading.

<br>

#### [How to Find Answers on Github](http://gwendolyn.io/how-to-find-answers-on-github/)

> At Recurse Center, I decided to leave my iOS comfort zone and plunge headfirst into Android, Javascript, macOS, and Python projects. Since I'm a little too impatient for documentation and tutorials, I came to realize Github is actually an awesome tool to learn quickly with.

She used Gists and Repository Search for learning new things.

<br>

#### [Apple UI Design Resources](https://developer.apple.com/ios/human-interface-guidelines/resources/?utm_campaign=iOS%2BDev%2BWeekly&utm_medium=email&utm_source=iOS_Dev_Weekly_Issue_284)

> The Apple UI Design Resources include Photoshop and Sketch templates, and other UI materials for quickly designing iOS apps. The included resources are comprehensive and accurately depict the full range of UIKit controls, views and glyphs available to developers using the iOS SDK. They make it easier to understand how iOS apps are constructed and how to design apps that match the iOS design language. Included icon and glyph production files have been preconfigured to automate asset production using Sketch slices or Adobe Generator for Photoshop CC.

<br>

#### [Inevitable Sherlocking](https://david-smith.org/blog/2017/01/18/inevitable-sherlocking/)

> This week I’ve been working on a big update to my Apple Watch sleep tracker, Sleep++. While I love the app, it is a bit funny to work on. I am pretty confident that somewhere deep within the Cupertino mothership, Apple is working on their own sleep tracking app for the Apple Watch.

I hope not...

<br>

#### [Choosing a Version Number for a CocoaPod with Updated Dependencies](https://www.dzombak.com/blog/2017/01/Choosing-a-Version-Number-for-a-CocoaPod-with-Updated-Dependencies.html)

> Therefore, when choosing a version number for a new release of a CocoaPod, one must take any dependency updates into account: if any dependency has been updated to a new minor version, the pod’s new version number must at least be a new minor version. And if any dependency has been updated to a new major version, the pod’s new version number must at least be a new major version.

<br>

#### [Coding Productivity in a World of Distractions](https://www.raizlabs.com/dev/2017/01/prod/)

> Software development takes focus. Distractions can derail productivity. Interruptions come from every direction and are hard to avoid. In my time at Raizlabs, I’ve come up with a few techniques that help me hit my commitments and still fulfill my responsibilities of being a good teammate.

<br>

---

### Podcast

#### [205: PEOPLE DON'T USE THE WEIRD PARTS](http://atp.fm/episodes/205)

> Follow up: MacRumors talks with Lattner

This episode's guest is Chris Lattner!!

<br>

#### [116: Is It About Vaping?](http://buildphase.fm/116)

> In this episode, Jack stuns Gordon with a true story about a bizarre Swedish Christmas ritual, Gordon talks about his adventures creating a simple web app using Swift, and finally Jack reveals his true feelings about the new MacBook Pro.

<br>

#### [29: A Chat With Fatal Error](https://spec.fm/podcasts/runtime/58032)

> This week we are joined by Soroush Khanlou and Chris Dzombak of "Fatal Error" to talk about "Not Invented Here" and how we approach project dependencies.

<br>

#### [13. The Law of Demeter](https://fatalerror.fm/episodes/2017/1/16/13-the-law-of-demeter)

> The Law of Demeter (also known as the Principle of Least Knowledge) shows up occasionally in code reviews and discussions of object-oriented programming practices. But what does it actually mean, and why should we use it?

<br>

---

I like this way.

<script src="https://gist.github.com/JohnSundell/ba51a340235c5116a5902fa83997fb71.js"></script>

If you have any questions and feedbacks about a kind of new Swifty week, feel free to ask me :+1:
You can catch me on [Twitter](https://twitter.com/pixyzehn) and [Github](https://github.com/pixyzehn).

Have a lovely week <3
