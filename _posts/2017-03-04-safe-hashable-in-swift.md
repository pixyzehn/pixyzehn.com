---
layout: post
title: Safe Hashable in Swift
date: 2017-03-04
tags: swift
comments: true
---

This is the way to create safe `Hashable` based on @rayfix's talk.

<script src="https://gist.github.com/pixyzehn/f26c5f976d60abc4452d187029263006.js"></script>

In this case, there is no problem here because a hashValue is unique.

<script src="https://gist.github.com/pixyzehn/ce4af7f4dbdcbe9e1c7bb9d87228bf72.js"></script>

`BadPoint(x: 2.0, y: 3.0)` and `BadPoint(x: 3.0, y: 2.0)` are not same object, but they have a same hashValue. This is a problem.

<script src="https://gist.github.com/pixyzehn/c60fa4dcc9023236dc0a25c28e93e3da.js"></script>

As @rayfix mentioned in his talk, heap allocations are expensive compared to previous way! And looks a little bit ugly:(  
This is what he did to avoid a collision.

<script src="https://gist.github.com/pixyzehn/f36b2101d2640c27a6053e0a84cba797.js"></script>

---

The another interesting way to solve these problems is from [Sourcery's AutoHashable](https://github.com/krzysztofzablocki/Sourcery/blob/master/Templates/AutoHashable.stencil). But Sourcery create `AutoHashable` automatically. Awesome!!

<script src="https://gist.github.com/pixyzehn/7ad2ecdffb6a93aa10e1fc88fef8f6dc.js"></script>

---

Ref:

- [Unsafe Swift by Ray Fix](https://speakerdeck.com/rayfix/unsafe-swift)
- [Swift Hashable](https://useyourloaf.com/blog/swift-hashable/)
- [Hashable from official API Reference](https://developer.apple.com/reference/swift/hashable)
- [Swift Comparison Protocols](http://nshipster.com/swift-comparison-protocols/)
