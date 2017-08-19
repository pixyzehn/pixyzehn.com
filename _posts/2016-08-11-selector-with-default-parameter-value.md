---
layout: post
title: "Selector with Default Parameter Value"
date: 2016-08-11 15:23:00 +0900
tags: swift
comments: true
---

I found a strange behavior in `#selector` with [Default Parameter Values](https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/Functions.html){:target="_blank"}.

I set `UIRefreshControl` as usual like this.

```swift
let refreshControl = UIRefreshControl()
refreshControl.addTarget(self, action: #selector(loadItems), forControlEvents: .ValueChanged)
...
```

In this same file, I have a function that takes a default parameter value.

```swift
func loadItems(page: Int = 0) {
  debugPrint("\(page)") // Need it later

  // Load items from API...
}
```

I wanted to use the default parameter value if users use pullToRefresh action.
I did pullToRefresh action several times, and then I could see the logs like this.

```swift
// This is a Xcode console.
> 0
> 140622637638640
> 0
```

Why is `140622637638640` ? I expect to see `0` same as the first. Finally, I avoided having this strange behavior by adding another function.

```swift
override func viewDidLoad() {
    super.viewDidLoad()
    let refreshControl = UIRefreshControl()
    refreshControl.addTarget(self, action: #selector(pullToRefreshed), forControlEvents: .ValueChanged)
    ...
}
...

func pullToRefreshed {
  loadItems()
}

func loadItems(page: Int = 0) {
  // Here is debugPring(\(page))
  // load items from API...
}
```

I think it's easy to avoid this bug, but it looks weird for me. I don't want to create a function for only that.
If you know about that, tell me about it. May be someone already mentioned the above. If not, I may file a bug report in [JIRA](https://bugs.swift.org/){:target="_blank"}.
