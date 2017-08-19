---
layout: post
title: "First and rest in Type erasure"
date: 2016-11-24 21:53:00 +0900
tags: swift
comments: true
---

I found this article ([First and Rest](http://www.figure.ink/blog/2016/11/12/first-and-rest?utm_source=Swift_Developments&utm_medium=email&utm_campaign=Swift_Developments_Issue_64)) by chance. In this article, he explains the best way to take an array and split it into its first and remaining elements. I think it is interesting, so I tried my hand at it. I recommend you to read his article before you read my article.

When I saw the following way,

```swift
// From his article
func loop(_ c: [Int]) {
  let (first, rest) = (c.first, c.dropFirst())
  guard let someFirst = first else {
    return
  }

  print(someFirst)
  loop(Array(rest))
}

loop([1,2,3,4]) // => 1,2,3,4
```

I prefer to this way in my opinion because `rest` variable looks a little bit verbose for me.

```swift
// Just remove `rest` variable
func loop(_ c: [Int]) {
  guard let first = c.first else {
    return
  }

  print(first)
  loop(Array(c.dropFirst))
}

loop([1,2,3,4]) // => 1,2,3,4
```

In the last way in his blog, I really see it as a beautiful way.

```swift
// From his article
func loop(_ c: [Int]) {
 guard case
       let(first?, rest) = (c.first, c.dropFirst())
       else {
   return
 }

 print(first)
 loop(Array(rest))
}

loop([1,2,3,4]) // => 1,2,3,4
```

Only one thing I have concern is that `Array(rest)`. As he mentions,


> Well, almost. Note that dropFirst() returns an ArraySlice. Because loop expects an Array, we have to convert rest before passing it to loop(). Reworking loop() to take a generic Collection would get around this — at the expense of being less blog-friendly


The problem is returns type was `ArraySlice`. To be exact, It will be `ArraySlice<Int>` in this case. It's like a collection wrapper. The most easiest way to solve it is like this.

```swift
func loop(_ c: ArraySlice<Int>) {
    guard let first = c.first else {
        return
    }

    print(first)
    loop(c.dropFirst())
}

loop([1,2,3,4]) // => 1,2,3,4
```

If you want more generic way,

```swift
func loop<T>(_ c: ArraySlice<T>) {
    guard let first = c.first else {
        return
    }

    print(first)
    loop(c.dropFirst())
}

loop([1,2,3,4]) // => 1,2,3,4
loop(["hoge","fuga","foo"]) // => "hoge","fuga","foo"
```

Instead of `ArraySlice<T>`, it may be good to use `AnyCollection<T>`. It means I use Type erasure. I don't need to care about what type it is.

```swift
func loop<T>(_ c: AnyCollection<T>) {
    guard let first = c.first else {
        return
    }

    print(first)
    loop(c.dropFirst())
}

loop(AnyCollection([1,2,3,4])) // => 1,2,3,4
loop(AnyCollection(["hoge","fuga","foo"])) // => "hoge","fuga","foo"
```

In this case, I'll use `Collection protocol` becuase they have an instance property `var first: Self.Iterator.Element?` and a method of `func dropFirst(Int)` as an instance method. But it has error for now...

```swift
// Not working!!
func loop<C: Collection>(_ c: C) {
    guard let first = c.first else {
        return
    }

    print(first)
    loop(c.dropFirst()) // Error!! Argument type 'S.SubSequence' does not conform to expected type 'Sequence'
}
```

### Conclusion

I think I need to try other ways to find a best way. But for me, I like Type erasure way because it's very simple and generic.
Do you have an any thought? Please share your opinion and idea.

---

Ref.  

[Flexible Code for Generic Collections](https://speakerdeck.com/natecook1000/flexible-code-for-generic-collections)  
[Sequence protocol in API Reference](https://developer.apple.com/reference/swift/sequence)  
[Collection protocol in API Reference](https://developer.apple.com/reference/swift/collection)  
[Experimenting with Swift 3 Sequences and Iterators](https://www.uraimo.com/2015/11/12/experimenting-with-swift-2-sequencetype-generatortype/)
