---
layout: post
title: "Swifty Week 4"
date: 2016-12-18 8:55:00 +0900
tags: swiftyweek
comments: true
published: false
---

This is the **#4** article. From this article, I added a **Podcast** tag in the bottom because I often listen to iOS Podcasts. I'll pick up some of them. Also, I added a **Talk** tag.
By the way, I'm really looking forward to getting AirPods in next week :blush: My AirPods is on the way!

<br>

---

### Article

#### [NSRegular​Expression](http://nshipster.com/nsregularexpression/){:target="_blank"}

> NSRegularExpression can be a truly useful tool. In fact, you may have used it already to find dates, addresses, or phone numbers in user-entered text—NSDataDetector is an NSRegularExpression subclass with patterns baked in to identify useful info. Indeed, as we’ve come to expect of text handling throughout Foundation, NSRegularExpression is thorough, robust, and has surprising depth beneath its tricky interface.

Now I'm sure I can choose the best choice in regular expression.

<br>

#### [Attributed String in Swift: the right way](https://medium.com/breakfastcode/attributed-strings-in-swift-6d4b37db59a5#.gd7brlmkr){:target="_blank"}

> NSAttributedString is one of the things I’ve started to hate in a post-Swift world; creating, combining and applying styles to a string, then render it it’s not a difficult task, but it’s boring, verbose and so damn inelegant.
It’s like playing withAuto Layout via code until not so long ago; we can deserve a better experience, especially now we are using Swift: we can make it type-safe, easy and coincise to use.

```swift
let titleStyle,highglited = // just define your own style
// Let's combine simple String, String with applied attributes, as like you can imagine
let attributedText = "Hello" + username.set(style: titleStyle) + "," + " welcome here".set(style: highglited)
```

I can understand easily. I used to use [TextAttributes](https://github.com/delba/TextAttributes){:target="_blank"} before, but I may use his library.

<br>

#### [IGListKit Tutorial: Better UICollectionViews](https://www.raywenderlich.com/147162/iglistkit-tutorial-better-uicollectionviews){:target="_blank"}

> IGListKit was created to make feature-creep and massive-view-controllers a thing of the past when working with UICollectionView. By creating lists with IGListKit, you can build apps with decoupled components, blazing-fast updates, and support for any type of data.
In this tutorial you will refactor a basic UICollectionView to use IGListKit, then extend the app and take it out of this world!

I haven't tried this tutorial, but I'm still interested in using `IGListKit` if I have a chance.

<br>

#### [RxSwift Primer: Part1](https://www.caseyliss.com/2016/12/15/rxswift-primer-part-1){:target="_blank"} and [Part2](https://www.caseyliss.com/2016/12/16/rxswift-primer-part-2){:target="_blank"}

> Today, we’ll begin with the basic questions. What is Reactive Programming? What does it bring to the table? Why should I care?

I'm using RxSwift now in some projects. I could look back on an important concept from Part1.

<br>

#### [Imagining Dependency Injection via Initializer with Storyboards](http://holko.pl/2016/12/14/storyboards-dependency-injection/){:target="_blank"}

> We presented a simple addition to UIStoryboard class that could improve an important downside of that API. We weren’t able to confirm – not having access to UIKit’s source code – that this addition is indeed as simple as it seems.
With that API and with avoidance of segues we would have storyboards that don’t exercise most of the issues pointed out in “Storyboards and Their (Better) Alternatives.” Let’s hope that this is something Apple is currently working on and that we’ll see better APIs for storyboards soon.

```swift
let storyboard = UIStoryboard(name: "Main", bundle: nil)
let viewController = storyboard.instantiateViewController(withIdentifier: "detailsViewController")
present(viewController, animated: true, completion: nil)
```
or

In SwiftGen,

```swift
let viewController = StoryboardScene.Main.initialViewController()
present(viewController, animated: true, completion: nil)
```

He tried to solve the problem that `UIViewController` can pass data to it after the initialization time.

<br>

---

### Slide

#### [Contributing to Swift](https://speakerdeck.com/ayanonagon/contributing-to-swift){:target="_blank"}

> A few months ago, I somehow ended up contributing a non-trivial diff to the Swift compiler without much prior experience with C++ and absolutely zero with compilers, and a lot of people have been asking me how I managed to pull that off. This talk will go over how to get up and running with the Swift compiler and how you can contribute too even if it feels completely new and scary!

<br>

---

### Github

Kickstarter team opensourced their project. I guess they published most of codes in iOS. Awesome!

[kickstarter/ios-oss](https://github.com/kickstarter/ios-oss){:target="_blank"}

Also, you can see [Kickstarter-ReactiveExtensions](https://github.com/kickstarter/Kickstarter-ReactiveExtensions){:target="_blank"}, [Kickstarter-Prelude](https://github.com/kickstarter/Kickstarter-Prelude){:target="_blank"} and so on in their repo.

[malcommac/SwiftRichString](https://github.com/malcommac/SwiftRichString){:target="_blank"}

As I mention, this library is related to [Attributed String in Swift: the right way](https://medium.com/breakfastcode/attributed-strings-in-swift-6d4b37db59a5#.gd7brlmkr){:target="_blank"}.

[insidegui/PlayAlways](https://github.com/insidegui/PlayAlways){:target="_blank"}

> PlayAlways is a menubar app to quickly create new iOS or macOS playgrounds.

Looks useful for people who like playing playgrounds.

[ennioma/arek](https://github.com/ennioma/arek){:target="_blank"}

> AREK is a clean and easy to use wrapper over any kind of iOS permission.

<br>

---

### Random

#### [Developers' side projects](https://www.joelonsoftware.com/2016/12/09/developers-side-projects/){:target="_blank"}

> It may vary depending on whom you talk to, who is in power at any particular time, and whether or not you’re sleeping with the boss. You’re on your own, basically—the only way to gain independence is to be independent. Being an employee of a high tech company whose product is intellectual means that you have decided that you want to sell your intellectual output, and maybe that’s OK, and maybe it’s not, but it’s a free choice.

<br>

#### [Our Favorite Mac Apps of 2016](https://www.macstories.net/news/our-favorite-mac-apps-of-2016/){:target="_blank"}

> What becomes a favorite app is personal, complicated, and evolves over time. Favorites can be brand-new apps that debuted this year, old standbys that you go back to over and over, or newly-discovered apps that have been around for a while. With the end of the year in sight Alex, Jake, and I got together and each picked a handful of our favorite Mac apps that we used in 2016 to share with you.

I could know some new apps from the article. Check it out!

<br>

---

### Podcast

#### [Episode 123 – Tea. Earl Grey, Hot! ](http://mtjc.fm/episode-123-earl-grey-hot/){:target="_blank"} from The More Than Just Code Podcast

> We start off this week following up on Protocol Oriented Programming, CarPlay receivers and the iCloud Calendar bug. We discuss Kickstarter’s move to open source their IOS and Android apps. Air Pods are available for order and instantly backordered. We also cover Issues with MacBook Pro battery issues and Apple’s reaction. Jaime discusses his newly acquired Google Home. Picks: Apple Support app, The Twist, Dongle Dangler and TouchBar Piano.

<br>

#### [Homebrew and Swift with with Max Howell](https://changelog.com/podcast/232){:target="_blank"} from CHANGELOG

> Max Howell, famous for creating Homebrew, joined the show to talk about his start in software and open source, the tweet that was heard around the world when he interviewed with Google and didn't get accepted, the creation of Homebrew, the naming process, as well as the difficulty letting go. We also talked about his passion for the Swift programming language, and his work on Swift Package Manager while at Apple.

<br>

#### [27: What if?](https://spec.fm/podcasts/runtime/54860){:target="_blank"} from RUNTIME

> This week we talk about what we might do if we didn't work on iOS apps.

<br>

---

I bought [Swift Style](http://ericasadun.com/2016/12/14/buy-a-book-swift-style/){:target="_blank"} written by @erica last week. It's in beta version. If I find something that should be modified, I'll contact her by email. Highly recommend in my opinion!

If you have any questions and feedbacks about a kind of new Swifty week, feel free to ask me :+1:
You can catch me on [Twitter](https://twitter.com/pixyzehn){:target="_blank"} and [Github](https://github.com/pixyzehn){:target="_blank"}.

Have a lovely week <3
