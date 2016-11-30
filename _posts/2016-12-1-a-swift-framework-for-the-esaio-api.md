---
layout: post
title: "A Swift framework for the esa.io API"
date: 2016-12-1 7:39:00 +0900
tags: swift
comments: true
---

I worked on a Swift framework for the esa.io API called [EsaKit](https://github.com/pixyzehn/EsaKit){:target="_blank"}. EsaKit is build with [ReactiveSwift](https://github.com/ReactiveCocoa/ReactiveSwift){:target="_blank"} and [Himotoki](https://github.com/ikesyo/Himotoki){:target="_blank"}.

---

#### What's esa.io?

[esa.io](https://esa.io/){:target="_blank"} is a service that is an expertise Sharing Archives for motivated teams. This is famous only in Japan. I use the service in my team as a quick daily report. So I made a simple client iOS application for the service before. (=> [Esafeed](https://itunes.apple.com/us/app/esafeed-for-esa.io/id1111901482?mt=8){:target="_blank"})

For this app, I need to create a simple client framework. This is why I made EsaKit.

---

#### How to use EsaKit?

In EsaKit, you can get a necessary response easily like this.

```swift
let client = EsaClient(token: "your_token", teamName: "your_team_name")
client.members()
    .startWithResult { result in
        switch result {
        case let .success(response, members):
            print("\(response)") // => Response(xRateLimitLimit: 75, XRateLimitRemaining: 71)
            print("\(members)")  // => Memberss(members: [EsaKit.MemberUser(name:...
        case let .failure(error):
            print("An error occured: \(error)")
        }
    }

client.teamName = "other_your_team_name"
client.posts()
    .startWithResult { result in
        switch result {
        case let .success(response, posts):
            print("\(response)") // => Response(xRateLimitLimit: 75, XRateLimitRemaining: 70)
            print("\(posts)")    // => Posts(posts: [EsaKit.Post(number: 11, name:...
        case let .failure(error):
            print("An error occured: \(error)")
        }
    }
```

I'll introduce EsaKit into production. Stay tuned:)
Please add Github Star to [EsaKit](https://github.com/pixyzehn/EsaKit){:target="_blank"} if you like it.
