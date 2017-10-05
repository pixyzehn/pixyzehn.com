---
layout: post
title: "Swifty Week 8"
date: 2017-01-14 19:52:00 +0900
tags: swiftyweek
comments: true
published: false
---

This is the **#8** article. If you interested in Initializer in Storyboards for DI, see [this my article](https://pixyzehn.com/2017/01/14/init-based-storyboard-viewcontroller.html). I just changed a little bit of code. Also, great thanks @JaviSoto!

In this week, we had a big news about Chris Lattner. Wish all the best for him in Tesla :)

> Working with many phenomenal teams at Apple to launch Swift has been a unique life experience.  Apple is a truly amazing place to be able to assemble the skills, imagination, and discipline to pull something like this off.  Swift is in great shape today, and Swift 4 will be a really strong release with Ted as the Project Lead....  
by Chris Lattner

- [[swift-evolution] Update on the Swift Project Lead](https://lists.swift.org/pipermail/swift-evolution/Week-of-Mon-20170109/030063.html)
- [Apple Swift team undergoes reorganization](http://ericasadun.com/2017/01/10/apple-swift-team-undergoes-reorganization/).

<br>

---

### Article

#### [Swift Algorithm Club: Graphs with Adjacency List](https://www.raywenderlich.com/152046/swift-algorithm-club-graphs-adjacency-list)

> In this tutorial, you’ll learn the basics of graph theory, then create an adjacency list in Swift 3.

I constantly check Swift Algorithm Club because it's interesting.

<br>

#### [Types vs TDD](http://chris.eidhof.nl/post/types-vs-tdd/)

> Don’t get me wrong: types are not a silver bullet. You still need to test your code. But wouldn’t you rather test interesting parts, and leave the boring stuff to the compiler?

A response to [this article](http://blog.cleancoder.com/uncle-bob/2017/01/11/TheDarkPath.html) by uncle bob.
Other opinions are [here](http://mjtsai.com/blog/2017/01/12/static-typing-vs-testing/).

<br>

#### [Swift 3 and Comparing Optionals](http://useyourloaf.com/blog/swift-3-and-comparing-optionals/)

> So for now at least you need to rewrite any optional comparisons when moving to Swift 3.

If you never converted to Swift3, you'll meet this error.

<br>

#### [Accessing Dictionaries with Key Paths](https://oleb.net/blog/2017/01/dictionary-key-paths/)

> I helped a little in the preparation of the episode and while experimenting with this problem developed something that ultimately didn’t make it into the video, so I’d like to show it to you here.

In this kind of a heterogeneous dictionary,

```swift
var dict: [String: Any] = [
    "language": "de",
    "translator": "Erika Fuchs",
    "translations": [
        "characters": [
            "Scrooge McDuck": "Dagobert",
            "Huey": "Tick",
            "Dewey": "Trick",
            "Louie": "Track",
            "Gyro Gearloose": "Daniel Düsentrieb",
        ],
        "places": [
            "Duckburg": "Entenhausen",
            "Money Bin": "Geldspeicher",
        ]
    ]
]
```

For instance, You'll get the value of "Daniel Düsentrieb" by using a key path that he created.

```swift
dict[keyPath: "translations.characters.Gyro Gearloose"] // → "Daniel Düsentrieb"
dict[keyPath: "translations.characters.Magica De Spell"] = "Gundel Gaukeley"
dict[keyPath: "translations.characters.Magica De Spell"] // → "Gundel Gaukeley"

dict[string: "translations.characters.Scrooge McDuck"]?.append(" Duck")
dict[keyPath: "translations.characters.Scrooge McDuck"] // → "Dagobert Duck"
dict[dict: "translations.places"]?.removeAll()
dict[keyPath: "translations.places"] // → [:]
```

<br>

#### [Composable, type-safe UIView styling with Swift functions](https://medium.cobeisfresh.com/composable-type-safe-uiview-styling-with-swift-functions-8be417da947f?gi=4c98275f2094#.wv69okrwu)

> If you don’t abstract away the different styles of views you use in your application (font, background color, corner radius etc.), changing them is a huge pain in the ass. Trust me, I’m speaking from experience. So, I’ve started thinking of an API that will enable shared styles of different UIView instances.

This is his styling API:) Looks practical! (I abbreviated all the comments.)

```swift
import UIKit

struct UIViewStyle<T: UIView> {
    let styling: (T) -> Void

    static func compose(_ styles: UIViewStyle<T>...) -> UIViewStyle<T> {
        return UIViewStyle { view in
            for style in styles {
                style.styling(view)
            }
        }
    }
    ...
}
```

<br>

#### ["Watch Your Language!": The Road to Cleaner Code with SwiftLint](https://realm.io/news/slug-jp-simard-swiftlint/)

> Code style is largely unimportant, which is why it’s crucial to let tools do the pedantic formatting checks and allow yourself to focus on the more important aspects of writing code and building apps! In this Swift Language User Group talk, JP Simard explains exactly how to set up SwiftLint in your project to give you just the semantics you want, and help it stay out of your way while being an ever-watchful protector of code cleanliness.

<br>

#### [Inout variables with side effects](http://ilya.puchka.me/inout-variables-with-side-effects/)

> In Swift it's very common that such simple box classes become very helpful. In my current project besides this one and a trivial Box class we also use such boxes as NSCodingBox and Cached which save us from writing a lot of boilerplate. And the fact that in Swift we can use setters and observers for local variables just the same way as for properties also allows for some neat code improvements.

<br>

#### [Testing iOS Apps](http://merowing.info/2017/01/testing-ios-apps/)

> Writing maintainable tests in iOS is not that hard or time-consuming, once you get a hang out of it, it can even make you develop faster. The iteration cycle is much shorter with tests, which means you will get feedback faster.

<br>

#### [The Underlying Structure](http://khanlou.com/2017/01/the-underlying-structure/)

> A great example of this is NSDate. When I started programming, I had a tough time figuring out how to use the NSDate and all of its corresponding sibling objects, like NSDateComponents, NSDateFormatter NSCalendar. Why do you have to use NSCalendar to add 2 days to date? The boundaries between these classes seem arbitrarily drawn, and that makes it hard to know where to look to find any specific functionality you’re looking for.

<br>

#### [Scrollviews and stack views](http://commandshift.co.uk/blog/2017/01/09/scrollviews-and-stack-views/)

> It’s a common occurrence. You have some content in a stack view, and you want it to be scrollable. Maybe the content in the stack can change or you want keyboard avoidance or whatever. How do you set that up in a storyboard without either IB moaning at you, or the views not coming out right?

<br>

#### [GCD's Main Queue vs. Main Thread](http://blog.benjamin-encz.de/post/main-queue-vs-main-thread/)

> By combining GCD and Cocoa’s NSThread API we are drilling through the abstraction that CGD should provide in the first place. APIs that fully rely on GCD and ignore the presence of the underlying threads can run into problems if you call them on the main thread but not the main queue. This means, especially when calling into other frameworks, we should prefer using dispatch_queue_set_specific and dispatch_get_specific to check if our code is running on the main queue over using NSThread.isMainThread().

<br>

#### [Building a Compiler in Swift with LLVM, Part 3: Code Generation to LLVM IR](https://harlanhaskins.com/2017/01/11/building-a-compiler-with-swift-in-llvm-part-3-code-generation-to-llvm-ir.html)

> If you've gotten this far in the tutorial, then you'll have built a Lexer and Parser for the Kaleidoscope programming language. If you haven't read those, I'd strongly recommend reading Part 1 and Part 2 first. This time we'll be turning this parser into a proper compiler by turning the parsed code into LLVM Intermediate Representation (LLVM IR).

<br>

#### [Topics Foundation Dates #286: DateFormatter Basics 📆](https://littlebitesofcocoa.com/286-dateformatter-basics)

> Formatting dates and times is one of those common tasks we all have to do in almost every app. Today we'll take a look at how to use Foundation's solution for this: DateFormatter.

[nsdateformatter](http://nsdateformatter.com/) looks handy.

<br>

#### [Swift documentation, Part 2](http://www.jessesquires.com/swift-documentation-part-2/)

> I previously wrote about writing great documentation in Swift. If you haven’t read that post, head there now to catch up. This post is a follow-up with updates for GitHub’s new way to publish docs. This is how I’ve setup all of my Swift open source projects.

I tried to create docs in [EsaKit](https://github.com/pixyzehn/EsaKit). Docs are [here](https://pixyzehn.com/EsaKit/). Jazzy is great!!

<br>

---

### Slide

#### [Type classes in Swift](https://speakerdeck.com/kishikawakatsumi/type-classes-in-swift)

<script async class="speakerdeck-embed" data-id="ee4014a717de4c74b241266467200c6f" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

<br>

---

### Github

#### [onevcat/Hedwig](https://github.com/onevcat/Hedwig)

> Send email to any SMTP server like a boss, in Swift and cross-platform

#### [marinbenc/Mock-Generation-Swift](https://github.com/marinbenc/Mock-Generation-Swift)

> A Sourcery template to automatically generate mocks from Swift protocols.

#### [mathewsanders/Mustard](https://github.com/mathewsanders/Mustard)

>  🌭 Mustard is a Swift library for tokenizing strings when splitting by whitespace doesn't cut it.

#### [khanlou/Promise](https://github.com/khanlou/Promise)

> A Promise library for Swift, based partially on Javascript's A+ spec

#### [NghiaTranUIT/iOS-Awesome-Starter-Kit](https://github.com/NghiaTranUIT/iOS-Awesome-Starter-Kit)

> The perfect combination: Clean Swift + ReSwift + PromiseKit

#### [lxcid/ListDiff](https://github.com/lxcid/ListDiff)

> Swift port of IGListKit's IGListDiff

#### [oisdk/SwiftSequence](https://github.com/oisdk/SwiftSequence)

> A μframework of extensions for SequenceType in Swift 2.0, inspired by Python's itertools, Haskell's standard library, and other things.

<br>

---

### Random

#### [100 Days Without the App Store](https://blog.kapeli.com/100-days-without-the-app-store)

> A lot of users have expressed concerns about the future of Dash after Apple removed it from the App Store. This post is meant to give some insight into how Dash is doing exactly, as well as some interesting tidbits.

<br>

#### [A Tourist’s Guide to fastlane](https://medium.com/@MikeFurtak/a-tourists-guide-to-fastlane-878612afbe81#.6oswboxam)

> fastlane moves quickly. Since I started helping maintain it in November 2015, fastlane has been restructured and reorganized twice, changing where its code lives, how it’s built, and how it’s deployed. So, before I describe how things currently are, let’s review how we got here.

<br>

#### [On Getting Old(er) in Tech](https://dev.to/corgibytes/on-getting-older-in-tech)

> After years of scoffing at talk of prejudice in the information technology field -- as a white male with good hair --, I'm starting to call prejudice against my being old(er). It’s true: age discrimination is a real thing.

<br>

#### [How I Write Tests](https://blog.nelhage.com/2016/12/how-i-test/)

> I do try to write a lot of tests, these days, though, and I do try to write my code with tests in mind. And I’ve come to realize that my approach could be thought of as a test-driven-development philosophy. Here’s how I think about code and testing, especially in green-field systems or components.

<br>

---

### Podcast

In this week, there was no updated Podcast:(  
But, I like listening to the past episode from [fatalerror.fm](https://fatalerror.fm/).

<br>

---

If you have any questions and feedbacks about a kind of new Swifty week, feel free to ask me :+1:
You can catch me on [Twitter](https://twitter.com/pixyzehn){:target="_blank"} and [Github](https://github.com/pixyzehn){:target="_blank"}.

Have a lovely week <3
