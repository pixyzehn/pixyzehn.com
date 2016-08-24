---
layout: post
title: "Compiling Swift on macOS"
date: 2016-08-11 16:04:00 +0900
tags: swift
comments: true
---

Let's get Started to compile Swift on macOS (Build and Test) along with [Swift Documentation](https://github.com/apple/swift/blob/master/README.md){:target="_blank"}.
I usually use macOS, so I try to compile Swift on macOS.

First, we install some tools for build by using [Homebrew](http://brew.sh/){:target="_blank"}.

```sh
brew install cmake ninja
```

To sum up, these are required for builds of Swift. Actually, I don't know details about these, but I'll proceed next for now.

We create a directory for Swift project. (Directory name depends on you.)

```sh
mkdir swift-source
cd swift-source
```

And then, we clone Swift project.

```sh
git clone git@github.com:apple/swift.git
```

We can see many objects while cloning.
We'll pull down all the dependencies and other projects involved with building via SSH.

> Note: This is important since update-checkout (see below) checks out repositories next to the Swift source directory. This means that if one clones Swift and has other unrelated repositories, update-checkout may not clone those repositories and will update them instead.

```sh
./swift/utils/update-checkout --clone-with-ssh
```

:alarm_clock: It takes time to finish... :alarm_clock:

After a while, we are able to build and start basic tests like this.

```sh
./utils/build-script -r -t
```

This is a basic command to build Swift with optimizations and run basic tests with Ninja.
In here, `-r` means build the RelWithDebInfo variant of everything (default is Debug). `-t` is test Swift after building. You can see more info by `utils/build-script -h`.

:alarm_clock: It takes time to finish... :alarm_clock:

That's all. In addition, there are many [Testsuite subsets](https://github.com/apple/swift/blob/master/docs/Testing.rst#testing-swift){:target="_blank"}.

Run a only basic test.

```sh
./utils/build-script --test
```


### More info

- [Apple Swift / README](https://github.com/apple/swift/blob/master/README.md){:target="_blank"}
- [Apple Swift / Testing Swift](https://github.com/apple/swift/blob/master/docs/Testing.rst#testing-swift){:target="_blank"}
