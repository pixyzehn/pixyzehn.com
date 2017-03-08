---
layout: post
title: AutoEquatable and AutoHashable by Sourcery
date: 2017-03-09
tags: swift
comments: true
---

I'm really interested in [Sourcery](https://github.com/krzysztofzablocki/Sourcery), so I installed it in my one of repositories. In my case, I generated `AutoEquatable` and `AutoHashable` at first because I felt these implementations contain really a lot of boilerplate codes.

---

Here is an actual [PR](https://github.com/pixyzehn/EsaKit/pull/23) in [EsaKit](https://github.com/pixyzehn/EsaKit).

If I confirm to `AutoEquatable` or `AutoHashable` or both, `Sourcery` creates a needed function automatically like this.

- AutoEquatable
<script src="https://gist.github.com/pixyzehn/15acbaa873bcf8e2ee19c85a23426db5.js"></script>

- AutoHashable 
<script src="https://gist.github.com/pixyzehn/f9a73f1ccb1b589e1b77212c47aa2abc.js"></script>

If I add a new property or a new API, it prevents a human error! Though it looks trivial, `Sourcery` uses a safe `Hashable` as I mentioned in [Safe Hashable in Swift](https://pixyzehn.com/2017/03/04/safe-hashable-in-swift.html). Isn't it cool?

---

Note to self:

I created a simple script for `Sourcery`, and then I run `Sourcery` command in this [script](https://github.com/pixyzehn/EsaKit/blob/master/script/generate-files-from-sourcery.sh). I had a `Sourcery.swift` file to define `Auto***` commands like this. 

<script src="https://gist.github.com/pixyzehn/a04b9ee73e186149b389e4e9927324b0.js"></script>

If I move `Sourcery.swift` to `/EsaKit/Sourcery.swift`, `Sourcery` didn't create any codes:( I didn't know it has a such a specification until I have met this problem.  
So I had to put in under the `/EsaKit/Models` like this `/EsaKit/Models/Sourcery.swift` because all structs confirmed to `Auto***` is in `Models`.

![EsaKit Tree]({{ site.url }}/assets/esakit-tree.png){:width="60%"}

**Please be careful about `Auto***` files directory.**

However, I totally recommend it. `Sourcery` saved a lot of repetitive works:)
