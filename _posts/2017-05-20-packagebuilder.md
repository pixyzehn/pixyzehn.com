---
layout: post
title: "PackageBuilder builds a simple command-line structure by SwiftPM"
date: 2017-05-20 10:00:00 +0900
tags: swift
comments: true
---

Recently I created [PackageBuilder](https://github.com/pixyzehn/PackageBuilder) to build a simple command-line structure easily by SwiftPM. It's very simple, but it saves a lot your development time if you'd like to create a command line tool like [Marathon](https://github.com/JohnSundell/Marathon) created by @JohnSundell. This automatic tool is based on [his great article](https://www.swiftbysundell.com/posts/building-a-command-line-tool-using-the-swift-package-manager). Also, This tool inspired by [JohnSundell/SwiftPlate](https://github.com/JohnSundell/SwiftPlate). If you agree with them, I'm sure you'll like it:)

In its usage, what you have to do is just like this,

```console
$ packagebuilder {PACKAGE_NAME}
$ packagebuilder {PACKAGE_NAME} --path ~/Developer/project
```

For instance,

```console
$ packagebuilder AwesomePackage
```

The output is simple.
```console
Executing `swift package init --type executable` at /Users/pixyzehn/Developer/projects/AwesomePackage/
Creating Sources/AwesomePackage...
Creating Sources/AwesomePackageCore...
Creating Tests/AwesomePackageTests...
Deleting original files created by SwiftPM...
Cloning PackageBulder by HTTPS to get files in Templates...
Renaming {PACKAGE_NAME} to AwesomePackage...
Renaming {YOUR_NAME} to Nagasawa Hiroki...
Renaming {THIS_YEAR} to 2017...
Moving files in Templates to a correct position...
Deleting the temp folder...
Executing `swift build` & `swift test --parallel`
Generating xcodeproj...
Enjoy AwesomePackage 🎉
```

And then, you will get the executable package like this,

```
.
├── AwesomePackage.xcodeproj
│   ├── AwesomePackageCore_Info.plist
│   ├── AwesomePackageTests_Info.plist
│   ├── project.pbxproj
│   └── xcshareddata
│       └── xcschemes
│           ├── AwesomePackage.xcscheme
│           └── xcschememanagement.plist
├── LICENSE
├── Package.swift
├── README.md
├── Sources
│   ├── AwesomePackage
│   │   └── main.swift
│   └── AwesomePackageCore
│       └── AwesomePackage.swift
└── Tests
├── AwesomePackageTests
│   └── AwesomePackageTests.swift
└── LinuxMain.swift

8 directories, 12 files
```

The merit of this tool is that you can work on creating a package as soon as you come up with a good idea. Let's start creating an awesome package by opening `xcodeproj` in Xcode!

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Great new project generation tool by <a href="https://twitter.com/pixyzehn">@pixyzehn</a> - it&#39;s like SwiftPlate for Swift Package Manager-based command line tools! 👍 <a href="https://twitter.com/hashtag/swiftlang?src=hash">#swiftlang</a> <a href="https://t.co/bcNQjME3gn">https://t.co/bcNQjME3gn</a></p>&mdash; John Sundell (@johnsundell) <a href="https://twitter.com/johnsundell/status/865147650542362624">May 18, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Thank you again, @JohnSundell.

Contributions are more than welcome!
