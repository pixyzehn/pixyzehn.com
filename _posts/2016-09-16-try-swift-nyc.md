---
layout: post
title: "try!Swift NYC"
date: 2016-09-16 08:52:00 +0900
tags: swift
comments: true
---

A big Swift conference called [try!Swift NYC](http://www.tryswiftconf.com/){:target="_blank"} was held in New York on September 1st and 2nd, 2016. I attended overseas conference for the first time. I blogged about this conference in order not to forget the exciting experience.

![Hall]({{ site.url }}/assets/try-swift-nyc-hall.png)

You may know about [try!Swift](http://www.tryswiftconf.com/){:target="_blank"} conference held in Shibuya, Tokyo on March 2nd - 4th, 2016. I had really good time in that time, so I decided to join try!Swift NYC.

All presentation list is [here](https://github.com/tryswift/trySwiftNYC/blob/master/PRESENTATIONS.md){:target="_blank"}. I picked up some talks with my impression. At the end of this article, I'll write down my overall impression about this great conference. If you interested in talks, you can check talk video in Realm site later.(Not yet now)

---

- Building a Tiny Compiler [[Talk](https://speakerdeck.com/segiddins/writing-a-tiny-compiler){:target="_blank"}]

He talks about creating tiny compiler(new language) by using Swift. It is called [Sipquick](https://github.com/segiddins/Sipquick){:target="_blank"}. He made his languages executable Ruby codes in the end. When I develop iOS applications, I don't care about compiler things too much. I think it's good idea to know about how compilers work to some extent. In my opinion, I don't think I should fully understand how they work, but it may be time to know some parts.

- Extending Xcode 8 [[Talk](https://speakerdeck.com/danielpunkass/extending-xcode-8-try-swift-nyc-2016){:target="_blank"}]

Daniel Jalkut's talk about the new extension support in Xcode 8. I don't know anything about Xcode8's extension before this talk. He explain pros and cons of Source Editor Extensions in Xcode8. I was disappointed some facts that are scope of features are limited, but I hope Apple releases new incredible features in near future for sure. I tried to play samples. So far I miss Alcatraz's plugins.

More info:  
・[Xcode 8 extensions](https://theswiftdev.com/2016/08/17/xcode-8-extensions/){:target="_blank"}  
・[Using and Extending the Xcode Source Editor, WWDC 2016 - Session 414](https://developer.apple.com/videos/play/wwdc2016/414/){:target="_blank"}  

- Pushing the Envelope with iOS 10 Notifications [[Talk](https://speakerdeck.com/designatednerd/pushing-the-envelope-with-ios-10-notifications-try-swift-nyc-september-2016){:target="_blank"}]

Ellen Shapiro's talk about new notifications in iOS10. If you think of using UserNotifications.framework and UserNotificationsUI.framework, I recommend to see her talk and [sample project](https://github.com/designatednerd/iOS10NotificationSample){:target="_blank"}. She introduced new notifications framework with Protocol Oriented Programming. In this codes, it looks easy to remove iOS9's code that will be legacy in the future.

- Swift eye for the Stringly typed API [[Talk](https://speakerdeck.com/andyyhope/swift-eye-for-the-stringly-typed-api){:target="_blank"}]

Andyy Hope talks about Swift eye for the Stringly typed API.

> Stringly typed: A riff on strongly typed. Used to describe an implementation that needlessly relies on strings when programmer & refactor friendly options are available.

He explains how we avoid Apple official Stringly typed API. He made `NSUserDefaults` more type-safe API. When I develop iOS applications, I recently use [SwiftGen](https://github.com/AliSoftware/SwiftGen){:target="_blank"} for resources and [SwiftyUserDefaults](https://github.com/radex/SwiftyUserDefaults){:target="_blank"} for `NSUserDefaults`. It's good idea to create these as extensions or structs and enums by myself in a certain case.

- Refactoring at scale – Lessons learned rewriting Instagram’s feed [[Talk](https://speakerdeck.com/realm/ryan-nystrom-refactoring-at-scale-lessons-learned-rewriting-instagrams-feed){:target="_blank"}]

Ryan announces new iOS library [IGListKit](https://github.com/instagram/IGListKit){:target="_blank"} by Instagram. It looks great. I can't wait to see it. He said it will be coming in September, 2016.

In addition to the above, I saw many great talks.

![Talk1]({{ site.url }}/assets/try-swift-nyc-talk1.png)

![Talk2]({{ site.url }}/assets/try-swift-nyc-talk2.png)

#### Conclusion

try!Swift NYC was by far the best conference for me. I met many people and learned a lot. At the same time, I thought I'd like to contribute more to Swift developer community as possible as I can. Finally, thank you @NatashaTheRobot, organizers, speakers, and volunteers. Hope to see you again:)

![Ending]({{ site.url }}/assets/try-swift-nyc-ending.png)
