---
layout: post
title: "Swifty Week 1"
date: 2016-11-27 10:10:00 +0900
tags: swiftyweek
comments: true
published: false
---

This is the first week article. I inspired by many newsletters.
Sometimes I wanted to wrap up articles I read about Swift and iOS. This series of articles will be posted in every week:)
I try to do my best to achieve that.
I'll add [#swiftyweek](http://pixyzehn.com/tags/#swiftyweek){:target="_blank"} tag to this series of articles.

There are some notes in the Swifty Week.  

- At least, this is a just memo for me.  
- All contents are in English.
- I may use an incorrect English. (If you find my mistake, please let me know.)
- I usually post on weekends.  
- I put about 10 ~ 15 links with a short comment at most.
- Subtitles are `Article`, `Github`, `Random` and so on. (To be added.)
- This series may include old articles. Keep in mind that not every link is new.

I manage the all posts in [Github](https://github.com/pixyzehn/pixyzehn.github.io/tree/master/_posts){:target="_blank"}. Please create a PR or an issue if you want any changes.

<br>

---

### Article

#### [Protocol Oriented Programming is Not a Silver Bullet](http://chris.eidhof.nl/post/protocol-oriented-programming/){:target="_blank"}

> protocols are just one way to achieve polymorphic code

I cannot abuse Protocol Oriented Programming in everywhere.

<br>

#### [dotSwift 2016 - Rob Napier - Beyond Crusty: Real-World Protocols](https://youtu.be/QCxkaTj7QJs){:target="_blank"}

> Apple has declared Swift as the first Protocol Oriented language. If you've tried to write protocol oriented

Filmed at [http://2016.dotswift.io](http://2016.dotswift.io){:target="_blank"} on January 29th in Paris. @chriseidhof recommend the video at the end of the article.. This talk is useful if you think about when should I use Protocol Oriented Programming.

<br>

#### [Protocol-oriented Programming in Swift - Apple WWDC 2015](https://www.youtube.com/watch?v=g2LwFZatfTI){:target="_blank"}

> At the heart of Swift's design are two incredibly powerful ideas: protocol-oriented programming and first class value semantics. Each of these concepts benefit predictability, performance, and productivity, but together they can change the way we think about programming. Find out how you can apply these ideas to improve the code you write.

It may be time to watch the famous video again.

<br>

#### [Functional programming with Swift 3](http://mislavjavor.github.io/2016/11/14/Functional-programming-with-Swift-3.html){:target="_blank"}

> Functional programming is a great way to improve the safety and testability of your code. But remember - it’s not a one-size-fits-all paradigm. In fact, no paradigm is. So use it when you need it, and combine it with the features you love in Swift to make better software.

If you don't know about the functional side in Swift, this is the simple and clear article. You can check all in Swift Playground.

<br>

#### [Meaningful Composite Errors](https://medium.com/@IanKeen/meaningful-composite-errors-3146f191ff28#.nd9kwx9jz){:target="_blank"}

> Generally our errors represent a specific failure at a specific point in our code; which is fine… like the rest of our code we try to keep things decoupled.

Error handling is really important in Swift. He explain how to handle error by using a simple JSON decode case like a [Himotoki](https://github.com/ikesyo/Himotoki){:target="_blank"}. (just interface.)

<br>

#### [Fun with Set](http://commandshift.co.uk/blog/2016/11/25/fun-with-sets/){:target="_blank"}

> This behavior is reversed in Swift 3. Members of the first set are kept when performing a union operation. This means that most of the specific mappings are dropped when performing the union, because there is often a default mapping with the same name.

A behavior in Set is reversed in between Swift 2.2 and Swift 3. It looks weird for me. The article makes me dig into the reason.(Not yet.)

<br>

#### [Fun with Date Calculations](http://useyourloaf.com/blog/fun-with-date-calculations/){:target="_blank"}

> Date calculations are a common trap for the unwary. How do you work out the start of the day today, tomorrow or in five days or five months time? What is the correct answer when you add a month to January 31? If you are doing date and time calculations by adding the number of seconds in an hour or day you are probably doing it wrong.

This is another `fun with ***` series. But the author is different. If you're not familiar with Date Calculations, this article is worth reading. I used to struggle to solve hidden precision in Date like [this](http://martinfowler.com/bliki/HiddenPrecision.html){:target="_blank"}.

<br>

#### [noescape + Swift](https://medium.com/the-traveled-ios-developers-guide/noescape-swift-93375ba9d6c8#.6d0ckuvqw){:target="_blank"}

`@noescape` is the default value. We just need to add `@escape` if needed. Very simple. That makes sense.

<br>

#### [Swift 4 roadmap](https://www.infoq.com/news/2016/10/swift-4-roadmap){:target="_blank"}

> Expected to be released in late 2017, Swift 4 will aim to stabilize the language, both at the source code and ABI level. New features will include improvements to generics, and a Rust/Cyclone-inspired memory ownership model.

Looks good and promising. I hope Swift evolve constantly in the future.

<br>

#### [First and Rest](http://www.figure.ink/blog/2016/11/12/first-and-rest?utm_source=Swift_Developments&utm_medium=email&utm_campaign=Swift_Developments_Issue_64){:target="_blank"}

> Often times (especially when writing recursive functions) we want to take an array and split it into its first and remaining elements.

I also interested in pursuing a most effective way. I tried other solutions on this theme [First and rest in Type erasure](http://pixyzehn.com/2016/11/24/first-and-rest-in-type-erasure.html).

<br>

---

### Github

[nicklockwood/SwiftFormat](https://github.com/nicklockwood/SwiftFormat)  

> A code library and command-line formatting tool for reformatting Swift code

[cookiecutter-swift/Framework](https://github.com/cookiecutter-swift/Framework)  

> A template for new Swift iOS / tvOS / watchOS / macOS Framework project ready with travis-ci, cocoapods, Carthage, SwiftPM and a Readme file

I really like a useful command-line tool. Both tools will save a lot of my development time.

<br>

---

### Random

[Useful tips when setting up new macOS](https://gist.github.com/ashfurrow/3865eed417a5fbe8402708e2c706eea6){:target="_blank"}

> All the stuff I do on a fresh macOS Installation
by @ashfurrow

<br>

---

If you have any questions and feedbacks about a kind of new Swifty week, feel free to ask me :+1:
You can catch me on [Twitter](https://twitter.com/pixyzehn){:target="_blank"} and [Github](https://github.com/pixyzehn){:target="_blank"}. If you interested in more, check the archive of [Swifty week](http://pixyzehn.com/tags/#swiftyweek){:target="_blank"}.

Have a lovely week <3
