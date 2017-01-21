---
layout: post
title: "ViewModel with Realm Notifications"
date: 2017-01-21 17:31:00 +0900
tags: swift realm
comments: true
---

In a simple iOS project with Realm, I took this kind of structure.

![Structure]({{ site.url }}/assets/viewmodel-with-realm.png)

By using this structure, I got several merits like this.  

- Testability in business logic(ViewModel)  
- Testability in Storage
- Minimum(not fat or massive) View Controller  
- Solved consistency problem (between Storage and ViewModel, or ViewModel and View)

In ViewController, what I need to implement for updating UI is just the following code.

```swift
func changedItems(_ notification: Notification) {
    guard let changes = notification.userInfo?["changes"] as? RLMCollectionChange else { return }

    tableView.update {
        tableView.deleteRows(at: changes.deletions(inSection: 0), with: .left)
        if changes.deletions.count == changes.insertions.count { // When reordering items
            tableView.insertRows(at: changes.insertions(inSection: 0), with: .none)
        } else {
            tableView.insertRows(at: changes.insertions(inSection: 0), with: .left)
        }
        tableView.reloadRows(at: changes.modifications(inSection: 0), with: .none)
    }

    noItemLabel.isHidden = !itemViewModel.items.isEmpty
}
```

I had to introduce a reordering function, so this is the one problem to solve. For now, ViewController can know changes is reordering or not(like insert or delete) by comparing deletions count and insertions count. (I know it's not good solution.)

In ViewModel, I used `NotificationCenter` to connect View. (I abbreviated a lot to show only main parts.)

```swift
init(items: [Item]) {
    self.items = items

    token = Item.allObjects().sortedResults(usingProperty: "row", ascending: true)
        .addNotificationBlock { [weak self] results, changes, error in

        guard let strongSelf = self, let results = results, let changes = changes else { return }

        if let error = error {
            print("\(error)")
            return
        }

        ...

        // Tell changes to Views.
        NotificationCenter.default
            .post(name: .itemChangesNotification, object: nil, userInfo: ["changes": changes])
    }
}
```

So far, so good. If I find more better way, I'll update.

Ref: [Mastering Realm Notifications](https://realm.io/news/meetup-jp-simard-mastering-realm-notifications/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+realmio+%28Realm+News%29)

---

If you have any questions and feedbacks about a kind of new Swifty week, feel free to ask me :+1:
You can catch me on [Twitter](https://twitter.com/pixyzehn){:target="_blank"} and [Github](https://github.com/pixyzehn){:target="_blank"}.
