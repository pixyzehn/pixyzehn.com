---
layout: post
title: "Swifty command-line tool for todo list"
date: 2016-10-10 09:28:00 +0900
tags: swift
comments: true
---

I'll introduce a simple command-line tool that I made called `stodo` just for myself. To create command-line tool was first time experience for me. To be honest, it was really fun and comfortable because I don't need to stuck UI staffs. The repository is here.

[pixyzehn/stodo](https://github.com/pixyzehn/stodo){:target="_blank"}

`stodo` means Swifty todo. So I developed this by using Swift3.0. I chose [Commandant](https://github.com/Carthage/Commandant){:target="_blank"} as a framework for parsing command-line arguments. Keep in mind that don't forget add version in `Cartfile` when you use `Commandant` because its latest version is `0.11.1` but it also has higher version like `5.0.2`. If you don't add the version, you'll install higher version against your will. I noticed it through TravisCI test.

```
// Cartfile
github "Carthage/Commandant" ~> 0.11
```

Now you can install by `make install` after `git clone`.   

As I mention in [README](https://github.com/pixyzehn/stodo/blob/master/README.md){:target="_blank"}, you can use `stodo` like this.

---

```
$ stodo
Available commands:

   add       Create a new task
   delete    Delete a task if it exists
   done      Check done mark in a task
   help      Display general or command-specific help
   list      Show a list of your tasks
   move      Move your tasks
   rename    Rename your task
   reset     Reset all your task
   undone    Remove done mark in a task
   version   Display the current version
```

This is whole command usage with example.

### Add
```
$ stodo add 'Check new application'
[x] 001: Buy milk after work
[ ] 002: Call Taro
[ ] 003: Grab coffee at cafe
[ ] 004: Check new application
```

#### Add options
- `-d` or `--done` : Add a new task with a status of done.

### Delete
```
$ stodo delete 2
[x] 001: Buy milk after work
[ ] 003: Grab coffee at cafe
[ ] 004: Check new application
```

#### Delete options
None.

### Done
```
$ stodo done 3
[x] 001: Buy milk after work
[x] 003: Grab coffee at cafe
[ ] 004: Check new application
```

#### Done options
None.

### Help
```
$ stodo help
Available commands:

   add       Create a new task
   delete    Delete a task if it exists
   done      Check done mark in a task
   help      Display general or command-specific help
   list      Show a list of your tasks
   move      Move your tasks
   rename    Rename your task
   reset     Reset all your task
   undone    Remove done mark in a task
   version   Display the current version
```

#### Help options
None.

### list
```
$ stodo list
[x] 001: Buy milk after work
[x] 003: Grab coffee at cafe
[ ] 004: Check new application

$ stodo list -m -t -d
- [x] Buy milk after work    | 2016/10/08 20:13:06
- [x] Grab coffee at cafe    | 2016/10/08 14:43:27
```
#### List options
- `-m` or `--markdown` : Show todo list by markdown.
- `-t` or `--time` : Show todo list with `createdAt` or `updatedAt` if it has.
- `-d` or `--done` : Show only done tasks.
- `-u` or `--undone` : Show only undone tasks.

### Move
```
$ stodo move 1 3
[x] 003: Grab coffee at cafe
[x] 001: Buy milk after work
[ ] 004: Check new application
```

#### Move options
None.

### Rename
```
$ stodo rename 3 'Grab coffee at home'
[ ] 003: Grab coffee at home
[x] 001: Buy milk after work
[ ] 004: Check new application
```

### Rename options
None.

### Reset
```
$ stodo reset
```
:warning: Delete all your task.

#### Reset options
None.

### Undone
```
$ stodo undone 1
[ ] 003: Grab coffee at home
[ ] 001: Buy milk after work
[ ] 004: Check new application
```

#### Undone options
None.

### Version
```
$ stodo version
```
Show the current version.

---

Now I plan to add the following features in near future.  


- Setting .stodo file path. (default path is HOME).  
- Support SwiftPM.  
- Improve code coverage.  

In this case, I can use `stodo`. Cool isn't it?

![stodo]({{ site.url }}/assets/example-stodo.png){:height="100px"}

If you wanna make command line tool, these links and repos might be good ref.  

- [realm/SwiftCov](https://github.com/realm/SwiftCov){:target="_blank"}  
- [Carthage/Carthage](https://github.com/Carthage/Carthage){:target="_blank"}  
- [gigitnet/Toybox](https://github.com/giginet/Toybox){:target="_blank"}  
- [kitasuke/GithubCLI](https://github.com/kitasuke/GithubCLI.swift){:target="_blank"}  
- [JPMartha/Pancake](https://github.com/JPMartha/Pancake){:target="_blank"}  
- [erica/tmdiff](https://github.com/erica/tmdiff){:target="_blank"}  
- [Command Line Tool In Swift](http://www.slideshare.net/kitasuke/command-line-tool-in-swift){:target="_blank"}  

Enjoy with command-line tool in Swift3.0 :wink:
