---
layout: post
title: "Init based Storyboard ViewController"
date: 2017-01-14 19:14:00 +0900
tags: swift
comments: true
---

This article is based on @JaviSoto's [gist](https://gist.github.com/JaviSoto/3bfb2c9e272a1363431fdad4d9b1d7e8).
He did the way in the Twitter's official Fabric app to work around [this](http://holko.pl/2016/12/14/storyboards-dependency-injection/?utm_campaign=iOS%2BDev%2BWeekly&utm_medium=email&utm_source=iOS_Dev_Weekly_Issue_281) in UIKit. It looks reliable and useful, so I just write it up for a memo.

The trivial one problem is that I always use a bunch of Storyboards not only `Main.storyboard`. I customized like this.

```objc
// StoryboardBackedViewController.h

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface StoryboardBackedViewController : UIViewController

// This method returns a different instance of self, so properties on self must be set *after* calling this initializer.
- (instancetype)initWithStoryboardWithName:(NSString *)storyboardName withStoryboardIdentifier:(NSString *)storyboardIdentifier NS_DESIGNATED_INITIALIZER;

#pragma mark - Unavailable

- (instancetype)initWithNibName:(NSString * _Nullable)nibNameOrNil bundle:(NSBundle * _Nullable)nibBundleOrNil NS_UNAVAILABLE;
- (_Nullable instancetype)initWithCoder:(NSCoder *)aDecoder NS_UNAVAILABLE;
- (instancetype)init NS_UNAVAILABLE;

@end

NS_ASSUME_NONNULL_END
```

```objc
// StoryboardBackedViewController.m

#import "StoryboardBackedViewController.h"

// Instantiating controllers from UIStoryboard is a horrible API that breaks that designated initializer chain.
// Implementing this in Obj-C so that we can inherit from this and compose initializers properly.

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wobjc-designated-initializers"

@implementation StoryboardBackedViewController

- (instancetype)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil {
    NSAssert(NO, @"Must use -%@", NSStringFromSelector(@selector(initWithStoryboardWithName:withStoryboardIdentifier:)));
    return nil;
}

- (instancetype)initWithStoryboardWithName:(NSString *)storyboardName withStoryboardIdentifier:(NSString *)storyboardIdentifier {
    return [[UIStoryboard storyboardWithName:storyboardName bundle:nil] instantiateViewControllerWithIdentifier:storyboardIdentifier];
}

@end

#pragma clang diagnostic pop
```

All setup finished, so I use this API from Swift codes.

```swift
// ViewController.swift

final class ViewController: StoryboardBackedViewController {
    var item: Item!
    init(item: Item) {
        super.init(storyboardWithName: "Hoge", withStoryboardIdentifier: "ViewController")
        self.item = item
    }
}
```

You can instantiate `ViewController` easily. The way may useful for Tests and Dependency Injection etc.

In this case, you cannot put only `init()` in `ViewController` because you marked `- (instancetype)init NS_UNAVAILABLE;`.

```swift
// ViewController.swift

final class ViewController: StoryboardBackedViewController {
    init() {
        super.init(storyboardWithName: "Hoge", withStoryboardIdentifier: "ViewController")
    }
}
```

Ref: [Imagining Dependency Injection via Initializer with Storyboards](http://holko.pl/2016/12/14/storyboards-dependency-injection/?utm_campaign=iOS%2BDev%2BWeekly&utm_medium=email&utm_source=iOS_Dev_Weekly_Issue_281)
