---
layout: post
title: "Swifty Week 3"
date: 2016-12-10 18:35:00 +0900
tags: swiftyweek
comments: true
published: false
---

Hi! This is the 3rd swifty week. Time flies so fast! The App Store's Holidays will be December 23 to 27 (Pacific Time).
We'll have a busy week more than usual. By the way, I'm very excited to attend [try!Swift Tokyo 2017](https://www.tryswift.co/tokyo/en){:target="_blank"}. If you have a chance to go the conference, feel free to talk to me :+1:

Congrats :tada: - [Best of 2016](https://developer.apple.com/app-store/best-of-2016/){:target="_blank"}

<br>

---

### Article

#### [Guarding Against Long Compiles](http://khanlou.com/2016/12/guarding-against-long-compiles/){:target="_blank"}

> it will warn you whenever any slow functions are added to the project. ... Add two flags: -Xfrontend and -warn-long-function-bodies=100, where 100 is the number of milliseconds you’d like the warning threshold to be

Looks useful and you can try in a second.

<br>

#### [Method Dispatch in Swift](https://www.raizlabs.com/dev/2016/12/swift-method-dispatch/){:target="_blank"}

> Swift will try to optimize method dispatch whenever it can. For instance, if you have a method that is never overridden, Swift will notice this and will use direct dispatch if it can. This optimization is great most of the time, but will often bite Cocoa programmers who are using the target / action patterns

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">A very thorough summary of how method dispatch works in various parts of Swift: <a href="https://t.co/DWWMUVtgLv">https://t.co/DWWMUVtgLv</a></p>&mdash; Chris Lattner (@clattner_llvm) <a href="https://twitter.com/clattner_llvm/status/806564802290008064">December 7, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

If you haven't read the article, I recommend you to read!

<br>

#### [Swift: Tuples](https://whatilearnedtoday.io/swift-tuples/){:target="_blank"}

> Tuples can be useful when more than one value type can provide more useful information about the outcome of a behavior or action than simply returning a single value.

The content is really simple and clear. I relearned Tuples in Swift.

<br>

#### [How to Unit Test Private Methods in Swift](https://cocoacasts.com/how-to-unit-test-private-methods-in-swift/){:target="_blank"}

> The key takeaway of this article is that private entities don’t need to be unit tested. Unit testing is a form of black-box testing. This means that we don’t test the implementation of the AccountViewViewModel struct, we test its specification.

That makes sense for me. The change from private to wider access control just for a unit test is too bad.

<br>

#### [Optionals and String Interpolation](https://oleb.net/blog/2016/12/optionals-string-interpolation/){:target="_blank"}

> The problem with the third option is that the nil-coalescing operator ?? requires matching types — if the left operand is a T?, the right operand must be a T. Applied to the example above, this means I can provide another Int as a default value, but not a string — which is what I’d like to do in this situation.

`print("The value is \(someValue ??? "unknown")")` looks natural.

<br>

#### [[swift-build-dev] Try out new SwiftPM features!](https://lists.swift.org/pipermail/swift-build-dev/Week-of-Mon-20161205/000780.html){:target="_blank"}

> SwiftPM has two new major features built on top of the new resolver:  
* Editable Packages  
* Version Pinning

SwiftPM is evolving so fast! Cool.

<br>

#### [Swift Holy Wars: To bracket or not in option sets?](http://ericasadun.com/2016/12/06/swift-holy-wars-to-bracket-or-not-in-option-sets/){:target="_blank"}

> The brackets clearly indicate both the argument role and creates an affordance, a specific visual indication that you can expand the set by introducing more options. Without brackets, this may not be intuitively obvious to someone less familiar with option sets.

In my opinion, I prefer options with brackets.

<br>

#### [Reactive programming from scratch](http://www.thomasvisser.me/2016/11/28/reactive-from-scratch/?utm_campaign=Swift_Developments_Issue_66&utm_medium=email&utm_source=Swift_Developments){:target="_blank"}

> Let’s write a minimal Reactive program. From scratch. Let’s reinvent a very tiny wheel, for the purpose of really understanding. When there’re so few lines of code, there’s not much to be explained. It’s all there, at a glance.

I could roughly learn a core of RxSwift.

<br>

#### [Swift: UIView Animation Syntax Sugar](https://medium.com/swift-programming/swift-uiview-animation-syntax-sugar-d40448fe1fed#.a2wlx7ho4){:target="_blank"}

> As you can see, the syntax and structure has been inspired by the things I’ve learned from using Swift’s functional programming APIs. We’ve traded in double closure API for a sequence of higher order functions and now our code reads a lot better and the compiler is fighting for us when we’re writing new lines and copy/pasting old ones.

I like enhancing the interface by not using any libraries.

<br>

#### [Exploring Swift Memory Layout](https://realm.io/news/goto-mike-ash-exploring-swift-memory-layout-video/){:target="_blank"}

> Let’s get down to bits and bytes! Abstraction is great, but sometimes it’s useful to dig down. In this GOTO Copenhagen 2016 session, we’ll explore exactly how Swift lays out data in memory, including both your own variables and Swift’s internal data structures.

<br>

#### [HOW TO PREVENT MEMORY LEAKS IN SWIFT CLOSURES](http://blog.stablekernel.com/how-to-prevent-memory-leaks-in-swift-closures){:target="_blank"}

> When working with closures in Swift, be mindful of how you are capturing variables, particularly selfs. If self is retaining the closure in any way, make sure to capture it weakly. Only capture variables as unowned when you can be sure they will be in memory whenever the closure is run, not just because you don't want to work with an optional self. This will help you avoid memory leaks, which leads to poor performance and crashes.

To judge whether you capture `Self Strongly` or not is an important thing for iOS developer.

<br>

#### [Swift snippet #5 — Generic Typealias](https://medium.com/swift-snippets/swift-snippet-5-generic-typealias-31981f5f8704#.3h9y3zp4u){:target="_blank"}

> In Swift 3 now that we can have generic typealiases, I use the above snippet quite often which declares a closure of a generic type (which could be any object you want) with void return type. We can use it in the following way which make things quite readable and easy to use 🚀:

This is one of the favorite snippets in Generic Typealias.

<br>

#### [Introducing Protocol-Oriented Programming in Swift 3](https://www.raywenderlich.com/148448/introducing-protocol-oriented-programming){:target="_blank"}

> With default implementations, you can give existing protocols common and automatic behavior, much like a base class but better since it can apply to structs and enums too.

<br>

#### [Swift Algorithm Club: November Digest](https://www.raywenderlich.com/148712/swift-algorithm-club-november-digest?utm_source=raywenderlich.com+Weekly&utm_campaign=167488dbb8-raywenderlich_com_Weekly11_29_2016&utm_medium=email&utm_term=0_83b6edc87f-167488dbb8-415115149){:target="_blank"}

> Our Swift 3 migration is coming to a close. So far, 52 of the 72 algorithms have been converted to Swift 3.

I saw some famous algorithms in Swift Algorithm Club. The implementation is really great.

<br>

#### [Wrapping C Code Within a Single Swift Package](http://www.bensnider.com/wrapping-c-code-within-a-single-swift-package.html){:target="_blank"}

> I'll outline a simple method that enables us - in a single Swift package - to embed C code along with a wrapper Swift library module. This allows us to craft C code for tasks C is good at, with the benefits of being able to easily integrate the C code with other Swift modules by writing a pure Swift (and Swifty) thin wrapper on top.

<br>

---

### Github

[TinyConsole](https://github.com/Cosmo/TinyConsole){:target="_blank"}

> A tiny log console to display information while using your iOS app. Written in Swift 3.

[prolificinteractive/Yoshi](https://github.com/prolificinteractive/Yoshi){:target="_blank"}

> A convenient wrapper around the UI code that is often needed for displaying debug menus.

[inamiy/SwiftElm](https://github.com/inamiy/SwiftElm){:target="_blank"}

> Reactive + Automaton + VTree in Swift, inspired by Elm.

[inamiy/VTree](https://github.com/inamiy/VTree){:target="_blank"}

> VirtualDOM for Swift (iOS, macOS)

<br>

---

### Random

#### [SIL Ownership Model](https://gottesmm.github.io/proposals/sil-ownership-model.html){:target="_blank"}

Is it time to understand ownership for Swift4??

<br>

#### [Diff Tokyo Berlin](https://medium.com/@kenzan100/diff-tokyo-berlin-5bee5654b6e8#.b9f5ejr40){:target="_blank"}

> I found out that Tokyo (23 wards, the most crowded part of Tokyo), has 3 times more people living than that of Berlin, and yet, they are crammed into less area (70 % of Berlin)

I was surprised :flushed: I could know life diff between Tokyo and Berlin.

<br>

#### [Instagram Dev, Swift Speaker & Swift Weekly Brief: A Top Dev Interview With Jesse Squires](https://www.raywenderlich.com/148465/instagram-dev-swift-speaker-swift-weekly-brief-top-dev-interview-jesse-squires?utm_source=raywenderlich.com+Weekly&utm_campaign=167488dbb8-raywenderlich_com_Weekly11_29_2016&utm_medium=email&utm_term=0_83b6edc87f-167488dbb8-415115149){:target="_blank"}

> This happened by accident. I was so interested in open source Swift when it was announced, and I wrote a few blog posts on my personal site. The community seemed to enjoy and appreciate them, so I decided to move it to a dedicated site and make it “a thing”.

<br>

#### [A Swift Kickstart (Second Edition)](http://editorscut.com/Books/SwiftKickstart/bookPage.html){:target="_blank"}

> This is the Second Edition of the best selling book that gets you up and going quickly writing code in the Swift Programming Language.

I bought it the other day. Look forward to reading it :satisfied:

<br>

---

If you have any questions and feedbacks about a kind of new Swifty week, feel free to ask me :+1:
You can catch me on [Twitter](https://twitter.com/pixyzehn){:target="_blank"} and [Github](https://github.com/pixyzehn){:target="_blank"}.

Have a lovely week <3
