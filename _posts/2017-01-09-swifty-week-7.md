---
layout: post
title: "Swifty Week 7"
date: 2017-01-09 13:18:00 +0900
tags: swiftyweek
comments: true
published: false
---

This is the **#7** article. I now work on a simple iOS application from scratch. I always like this kind of starting phase.

By the way, Swifty Week supported SSL by using CloudFlare. Enjoy the rest of article without an anxiety.
If you interested in how to support SSL on Github Pages, See [the blog](https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/){:target="_blank"}.

[Moya](https://github.com/Moya/Moya){:target="_blank"} finally released v8.0.0 :tada:

<blockquote class="twitter-tweet" data-lang="en"><p lang="und" dir="ltr">age += 1</p>&mdash; Hiroki Nagasawa (@pixyzehn) <a href="https://twitter.com/pixyzehn/status/818243695107457024">January 8, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<br>

---

### Article

#### [#32 Errorify String](https://swifting.io/blog/2017/01/08/32-errorify-string/){:target="_blank"}

> Some time ago I was watching episode 11 of Swift Talk and I noticed that Florian and Chris are using String to throw an error.

```swift
extension String: Error {}
func bar() throws {
    throw "Something went wrong!"
}
```

<br>

#### [Self-sizing UITextView in a UITableView using Auto Layout (like Reminders.app)](http://candycode.io/self-sizing-uitextview-in-a-uitableview-using-auto-layout-like-reminders-app/){:target="_blank"}

> Now, I’ve seen a lot of developers make the mistake of overcomplicating their code with custom text size calculations etc. Don’t do that! You do not have to use  textView.sizeThatFits() if you set up Auto Layout properly!

```swift
extension ViewController: UITextViewDelegate {
  func textViewDidChange(textView: UITextView) {
    let currentOffset = tableView.contentOffset
    UIView.setAnimationsEnabled(false)
    tableView.beginUpdates()
    tableView.endUpdates()
    UIView.setAnimationsEnabled(true)
    tableView.setContentOffset(currentOffset, animated: false)
  }
}
```

Super elegant solution!

<br>

#### [Unsafe Swift: Using Pointers And Interacting With C](https://www.raywenderlich.com/148569/unsafe-swift){:target="_blank"}

> This tutorial will take you on a whirlwind tour of the so-called “unsafe” features of Swift. The term “unsafe” sometimes causes confusion. It doesn’t mean that you are writing dangerously bad code that might not work. Rather, it means you are writing code that you need to be extra careful about because the compiler is limited in how it can help you.

Great article to know unsafe things!

<br>

#### [Request Behaviors](http://khanlou.com/2017/01/request-behaviors/){:target="_blank"}

> When firing network requests, there are often many side effects that need to take place. Side effects are poison for testability, however, and may vary from app to app and request to request. If we can create a system where we can create and compose these side effects together, we can increase the testability and other factors.

He pointed out some problems in Network requests, and then improved the behavior.

<br>

#### [Forced Unwrapping URLs](http://ericasadun.com/2017/01/06/holy-war-forced-unwrapping-urls/){:target="_blank"}

> The tl;dr was: he needed to swap the 2nd and 3rd lines of code. This allows both properties to be initialized before the code refers to self.

Safer non-optional initializer.

```swift
extension URL {
    /// Non-optional initializer with better fail output
    public init(safeString string: String) {
        guard let instance = URL(string: string) else {
            fatalError("Unconstructable URL: \(string)")
        }
        self = instance
    }
}
```

<br>

#### [Speeding Up Compile Times of Swift Projects](http://developear.com/blog/2016/12/30/Speed-Swift-Compilation.html){:target="_blank"}

> There are a couple of long-winded articles around about how to do this specific technique, however I have not seen anything quick and to the point.

The key is `Whole Module Optimization`. See also [official blog from Apple](https://swift.org/blog/whole-module-optimizations/){:target="_blank"}.

<br>

#### [Init based Storyboard View Controller Instantiation](https://gist.github.com/JaviSoto/3bfb2c9e272a1363431fdad4d9b1d7e8){:target="_blank"}

> I'm curious to hear what you think about what I did in the Fabric app to work around this in UIKit:

@JaviSoto's gist about [Imagining Dependency Injection via Initializer with Storyboards](http://holko.pl/2016/12/14/storyboards-dependency-injection/?utm_campaign=iOS%2BDev%2BWeekly&utm_medium=email&utm_source=iOS_Dev_Weekly_Issue_281){:target="_blank"}

<br>

#### [A smarter Retry with RxSwiftExt](http://rx-marin.com/post/rxswift-retry-with-delay/){:target="_blank"}

> Sometimes your observable will fail with an error but that would not mean that you need to give up trying. For example saving to a file might fail because the file is locked temporarily but a split second later would be unlocked and ready for your changes. Same goes for web requests - there might be a temporary glitch in connectivity which could make the observable fail.

The example is like this.

```swift
let speedUp: (UInt) -> Double = {retries in
    return max(0.0, 10 - Double(retries))
}
responseObservable
    .retry(.customTimerDelayed(maxCount: 10, delayCalculator: speedUp))
    .subscribe()
```

<br>

#### [Value SEMANTICS (not value types!) Alexis Gallagher on Dec 1 2016](https://realm.io/news/swift-gallagher-value-semantics/){:target="_blank"}

> Who can forget 2015, the “Year of the Value Type”? Through numerous blogs and videos, the Swift community explored how value types (structs and enums) enable new, simpler, safer patterns for application architecture. Alexis Gallagher argues for an important proviso: what a lot of these talks are trying to discuss is not value types, but value semantics. Value semantics is tricky to define, but the reward is a profound, satori-like experience of enlightenment, and a better understanding of how to use Swift.

He explained a definition of "Value semantics". His Consequences are like this.  

- Immutable reference types have value semantics.  
- Types have value semantics, not as an absolute matter, but only relative to an access level.

<br>

#### [Overriding UserDefaults for development](http://davelyon.net/2016/12/30/overriding-userdefaults-for-development){:target="_blank"}

> When you need a flag, or some lite configuration data, it’s easy to reach for UserDefaults. It’s usually more than enough to deal with simple flags for requesting push notification, new user setup, data migrations and so on. UserDefaults are great – until it comes time to test out whatever is behind that flag.

I didn't know this way that used "Arguments Passed On Launch".

```sh
-com.yourapp.showWidgetEnabler YES
```

<br>

#### [Weak References and Type Erasure](http://curtclifton.net/weak-references-and-type-erasure){:target="_blank"}

> In one of my side projects, two interesting Swift problems—heterogeneous arrays and weak references—collided in an interesting way.

About heterogeneous arrays and weak references problems that he faced in his project.

<br>

#### [Building a Compiler in Swift with LLVM, Part 1: Introduction and the Lexer](https://harlanhaskins.com/2017/01/08/building-a-compiler-with-swift-in-llvm-part-1-introduction-and-the-lexer.html){:target="_blank"}

> Compilers are some of the most fascinating programs because they touch every aspect of Computer Science, from CLI and API design to calling conventions and platform-specific optimizations. Yet, many developers have a fearful reverence for them that makes them seem unapproachable. I think this is unnecessary.

<br>

#### [Faster Parsers](https://gist.github.com/chriseidhof/4860a12bf36a48f28b55769db1004d95){:target="_blank"}

@chriseidhof's gist about parsers.

<br>

#### [Two Papers on Generic Programming](http://www.figure.ink/blog/2016/12/31/generic-programming){:target="_blank"}

> Towards that, I've found these two papers particularly enlightening: Generic Programming, Fundamentals of Generic Programming

He introduced two papers related to Generic Programming.

<br>

#### [Type-safe API call with Protocol Buffers in Swift](https://medium.com/@kitasuke/type-safe-api-call-with-protocol-buffers-in-swift-f71b6a4e6d2f#.sjuohjjtn){:target="_blank"}

> Apple recently open sourced swift-protobuf which is a plugin of Protocol Buffers for swift language. Protocol Buffers in Swift enables us to have type safety, make API faster and unify schema documentation of structured data. I had a chance to use swift-protobuf in my project and thought that it has many benefits for us, so I would like to share my knowledges and experiences.

About Protocol Buffers instead of JSON.

<br>

#### [Singletons and Static Property Side Effects](http://ericasadun.com/2017/01/05/dear-erica-singletons-and-property-observers/){:target="_blank"}

> Laptopmini writes, “Can you define a ‘get‘ closure for a singleton’s sharedInstance? I have a web socket manager and I’d like it to call ‘connect()‘ any time its instance is fetched”

Final singleton is here.

```swift
public final class Singleton {
    private static let _shared = Singleton()
    private init() { }

    public static var shared: Singleton {
        print("side effects here")
        connect() // for example
        return _shared
    }
}
```

<br>

#### [18. Swift gist: generic allValues for enums](https://theswiftdev.com/2017/01/05/18-swift-gist-generic-allvalues-for-enums/){:target="_blank"}

> The basic problem is that you can not get all the available values of an enum type in Swift. There are multiple solutions, and in this post I'll show you all of them.

<br>

#### [Peculiar inheritance of enum](http://blog.krzyzanowskim.com/2016/12/26/peculiar-inheritance-of-enum/){:target="_blank"}

> It turns out that Swift 3 nested enums combine options, but it's not inheritance. It's a little know "feature" you should be aware of when designing API with Swift 3.

Be careful of this peculiar behavior.

<br>

#### [Lenses and Prisms in Swift: a pragmatic approach](https://broomburgo.github.io/fun-ios/post/lenses-and-prisms-in-swift-a-pragmatic-approach/){:target="_blank"}

> The concept of functional lens has become pretty popular in functional programming circles, and there are already good contributions for applying lenses to other, traditionally imperative/OO contexts, like Javascript. Kickstarter’s own Brandon Williams has done an excellent job in introducing lenses to the Swift community, and in showing practical examples when working with something like UIView, a radically OOP construct that an iOS developer has to work with on a daily basis.

I'm interested in the idea of FRP from Haskell. Let's use the idea in Swift.

<br>

---

### Slide

#### [Swift Talk #31 Mutating Untyped Dictionaries](https://talk.objc.io/episodes/S01E31-mutating-untyped-dictionaries){:target="_blank"}

> We solve an interesting challenge from a StackOverflow question: mutating a nested untyped dictionary. In the process we discuss the mutability of value types and the concept of l-values.

<br>

---

### Github

#### [harlanhaskins/LLVMSwift](https://github.com/harlanhaskins/LLVMSwift){:target="_blank"}

> A Swifty wrapper for the LLVM C API version 3.9.1

The sample is [harlanhaskins/LLVMSwift-Example](https://github.com/harlanhaskins/LLVMSwift-Example){:target="_blank"}.

<br>

#### [olddonkey/ODUIThreadGuard](https://github.com/olddonkey/ODUIThreadGuard){:target="_blank"}

> A guard to help you check if you make UI changes not in main thread

<br>

#### [dduan/Termbox](https://github.com/dduan/Termbox){:target="_blank"}

> Swift Wrapper for Termbox: A Lightweight TUI Library

The original is [here](https://code.google.com/archive/p/termbox/){:target="_blank"} written in Go.

<br>

#### [bitjammer/resolution](https://github.com/bitjammer/resolution){:target="_blank"}

> Here's what I resolve to do in 2017. We all say we're going to try to do something but we're never sure just how important something can really be until the time comes, otherwise we just forget about it. Things change throughout the year, too. Rather than just say what I would like to do, I'm going to do the nerd thing and track it! I'm going to use GitHub issues and pull requests to mark items on the list as done or "NTBF" (Not To Be Fixed). In no particular order, here's what I am going to try to do.

This is a new style of resolution!

<br>

#### [inamiy/Flexbox](https://github.com/inamiy/Flexbox){:target="_blank"}

> Swift wrapper of facebook/yoga (CSS Flexbox layout engine).

<br>

#### [ochococo/Design-Patterns-In-Swift](https://github.com/ochococo/Design-Patterns-In-Swift){:target="_blank"}

> Design Patterns implemented in Swift

<br>

---

### Random

#### [Top 10 iOS Conferences in 2017](https://www.raywenderlich.com/149517/top-10-ios-conferences-2017){:target="_blank"}

> Picking the top 10 is a hard task. This is why I reached out to the raywenderlich.com team and the entire iOS community to ask for their feedback in developing this list.

try! Swift is one of my favorite conferences :)

<br>

#### [Injection II, the App](http://johnholdsworth.com/injection.html){:target="_blank"}

> The Injection plugin for Xcode is now a standalone app. This allows you to inject changes to class method implementations into a running application in the simulator or a macOS app. Injecting is now as simple as downloading the app and run having it running in the background while you are working on a project in Xcode and using the menu bar item "Inject Source" (don't forget to save the file!)

<br>

#### [Mac: Routing Links to Chrome Profiles](https://weblog.bulknews.net/mac-routing-links-to-chrome-profiles-d30b3960af39){:target="_blank"}

> Assume you’re a Chrome user and have multiple Google profiles, one for your personal account and another for work account. This way you can sign in to sites like Google Apps, GitHub or Slack with the correct account.

I have the same problem in my PC. I'll try the way!

<br>

#### [Tips for Self-Learning Programming](http://blog.hiphipjorge.com/tips-for-learning-programming/){:target="_blank"}

> My friend who's learning programming asked me the other day: 'What do you recommend for learn programming quickly?'. I learned programming by myself when I was in college, and over the years I've realized how I went about it in the hardest way possible. There are many things I could have done to learn at a much faster rate. Hence, I thought I'd look back and write down some of the things I've learned over there years about learning programming.

<br>

---

### Podcast

#### [Episode 125 – Instant Gratification](http://www.mtjc.fm/episode-125-instant-gratification/){:target="_blank"}

> We start off the show following up on the 2016 MacBook Pros and Consumer Reports poor rating due to battery issues. Tim gives his initial hands on impressions. We discuss theft-proofing the AirPod cases. We cover Core Data code generation in Xcode 8.2. Where iPhones are manufactured and assembled is discussed in the light of pressure by India on Apple. Picks: OSStatus.com, Swift Style – An Opinionated Guide to an Opinionated Language, How To Prevent Memory Leaks In Swift Closures and Neural Networks for Machine Learning.

<br>

---

If you have any questions and feedbacks about a kind of new Swifty week, feel free to ask me :+1:
You can catch me on [Twitter](https://twitter.com/pixyzehn){:target="_blank"} and [Github](https://github.com/pixyzehn){:target="_blank"}.

Have a lovely week <3
