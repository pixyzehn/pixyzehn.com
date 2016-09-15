note (try!Swift NYC)

https://github.com/tryswift/trySwiftNYC/blob/master/PRESENTATIONS.md

---
１日目
---

# Lambda: There and Back Again (Rob Napier)

Swiftは関数型プログラミング言語ではないと言っており、それを関数型プログラミングとして押し付けようとするとSwiftの言語と苦闘することになったり、CocoaのAPIを破壊してしまったりするようになってしまう。しかしSwiftは関数型プログラミングのいくつか特徴をうまく取り入れている。Swiftの言語に忠実になりつつ、CocoaのAPIとうまく合わせながら、Protocol Oriented Programmingに沿った使い方を紹介していた。

http://robnapier.net/copying


# Random Talk (Natalia Berdys)
ランダム性の領域の分野に関するトーク。GameplayKit frameworkを利用して、ランダム性に関連した一貫したパターンを紹介していた。
iOS10で導入された新たなAPIを利用していた。ユーザーにとって自然に感じるようなランダム性を作るにはどうしたら良いかなどの工夫。

# Building a Tiny Compiler (Samuel Giddins)
SwiftでTinyなcompilerを作った話。compilerを作るのは大変だが、それによって学ぶべきものは大いにあるという話。
compilerを作るのに必要なものをエレガントに作れたこと。Sipquickは、Lispっぽい言語。コンパイラを作成するときはテストが非常に重要になる。
この言語では最終的には入力をRubyのコードの変換し、実行している。コンパイラのことをほとんど知らなかったがこのようなミニマムな基本的な機能を備えたコンパイラを自作することによって、ブラックボックスとなってしまっている箇所を理解でき、興味を持った。また実際に作るとすると、どのあたりが難しいかがわかったり、重要である箇所がわかるので、オススメとのこと。
Parse(構文解析) , Lex(字句解析) ,  Semantic analysis(意味解析), 最適化, コード生成
S式(2分木ないしリスト構造の形式的な記述方式), sexp: Symbol-Expression, 括弧1組のこと
抽象構文木(AST)
https://realm.io/news/tryswift-yasuhiro-inami-parser-combinator/
https://github.com/segiddins/Sipquick
https://speakerdeck.com/segiddins/writing-a-tiny-compiler

# Incremental Swift (Amy Dyer)
既存のObjecttive-CのプロジェクトをSwiftに書き換えたという話。(Etsyというアプリ)
そのメリットなどを説明。SwiftはObjective-Cに互換性のあるものを提供しているが、それらを適用するのが難しいときもある。
結果的にフルスクラッチで書き換えたことが良かったという結論。会社にとってもプロジェクトにとっても。

# Healthy Minds in a Healthy Community (Erik Romijn)
Djangoのコミュニティから学んだコミュニティ形成において、重要なことなど。

# Extending Xcode8
Xcode8 のSource editor with app extensionについての話。できることをできないことなど。Xcode拡張の実用的な実装方法。
サンプル参照。

https://theswiftdev.com/2016/08/17/xcode-8-extensions/

# Say It ain't So: Implementing Speech Recognition in your app.
SiriKitによる音声認識APIを使ったトーク。SiriKitの制限など。
実際に検索ベースのアプリにSiriKitを導入してみたことなど。実用的なユースケースなどを紹介。

# Real World Swift Performance
Swiftのパフォーマンスについての話。クラス、Structの違いなど。

# Pushing the Envelope with iOS10 Notifications
iOS10におけるNotification APIについてのトーク。Push と Localの通知について。
iOS10のNotification APIに移行するにあたって、いくつかの落とし穴に注意する必要あり。
Push Notifications : Remote
Silent Push Notifications: Remote
Geofenced Notifications: Local
Time/Date Notifications: Local

UserNotifications.frameworkとUserNotificationsUI.frameworkが追加された
タイトル、サブタイトル、本文の3種類の文字列を表示できる
画像、動画、音声が添付できる
https://www.youtube.com/watch?v=Qubmnmh6a_g&feature=youtu.be

フォアグラウンドでシステムの通知を表示できる
Local/Remote通知でのhandling delegate methodが統合された
iOS9以下とiOS10で分けて実装する (スライド参考)
iOS9を捨てる時がきたら簡単に排除できるようにProtocol Orientedに実装
https://github.com/designatednerd/iOS10NotificationSample

# Decoding JSON with Swift
decodeするのに利用したJSONライブラリ。その使用例など。
ライブラリを使わないと、冗長になる。エラーがわかりにくい。type-safeでなくなる。
if let やguard let がたくさんに。
それぞれの有名どころのJSONパーサのインターフェイスとエラー内容を比較。シンプルさを考慮。
まとめ: type-safe, Generic, 詳細なError
JSONパーサライブラリをなにか作ってみるのはよさそうだなと思った。

参考リンク
https://gist.github.com/anatg/dc15bf03d191b4070b9fb2c2d6b27acf

https://speakerdeck.com/anatg/parsing-json-in-swift

# Architectural Superpowers
Good architectureの話。

---
２日目
---

# End-to-end application development in Swift
IBMによるサーバーサイドSwiftの話。サーバーサイドもSwiftにすることで、資産を共有できたり、再利用できたりする。実際のデモ。
パーフォマンス比較がSwiftすごかった。
Web framework `Kitura` の紹介
Swift3.0 + kitura の組合わせ
Blitherというネットワーキングライブラリ紹介
サンプルアプリなら簡単に作れそうであるが、実用的なのかは疑問
もしやるならSwift3から始めるのがよさそう。Swiftのアップデートがクライアント and サーバー側であるのが大変そう
IBMは、周辺のライブラリも作成しており、Todoアプリのサンプルアプリなども用意してある。

http://www.slideshare.net/cnbailey/tryswift-nyc-end-to-end-application-development-in-swift

# Driving User Engagement with watchOS3
watchOS3に追加された特徴の話。それによってどのように生かすことができるかなど。
User Engagement: ComplicationsやBackground tasks、Local Notificationsのこと
それぞれの紹介。
http://kristina.io/watchos-3-key-takeaways-from-wwdc16/
http://kristina.io/watchos-3-key-takeaways-from-wwdc16-part-2/

# Property-Based Testing with Swiftcheck
Property-Basedなテストによるメリットなど。

# Result Oriented Development
functional programmingにResultを利用すると、メリットがあるよという話。

# Designs for the Human Mind
デザインの話。直感的なデザインにするためには？

# Building user-centric security model in iOS applications
セキュリティの話。ユーザーのことを考えてセキュリティモデル。クライアントとサーバーシステムで具体的な例を提示していた。
サービスを立ち上げる時に考えるようなことなのかな。

# Making a Rich TextEditor in Swift
Font メタリックとNSAttributedの話。フォントを理解することによってUITextViewなどの細かいレイアウトをうまく調整する方法、Tipsなど。
NSAttributedStringを使うことによって数式などをうまく実現することが可能であるが、マジックナンバーが多くなってしまうという問題もあり、、NSAttributedStringのパラメーターをうまく使いこなすことによってTextだけで複雑なレイアウトが実現可能なことをも。そのような選択肢も実装の際に持っていると幅が広がると思った。

# building a better language App with Swift
言語習得の話。話している人が何ヶ国語も話せるみたい。Swiftの話は出てこなかった。。

# I make iOS apps - is RxSwift for me?
RxSwiftの話。RxSwiftのreactiveな面と、functionalな面を紹介した上で、RxSwiftは非常にいいという話。
あまり突っ込んだ話はなかった気がする。

# Swift eye for the Stringly typed API
AppleのAPIには、型を生かしきれていないAPIがいくつか存在し、それをうまく型を生かした書き方にするという話。
Stringly typed APIは、typoやSide effects, 衝突などを発生させる
例としてNSUserDefaultsを使い、型安全なものとしていた。この辺はkencomではSwiftyUserDefaultsというサードパーティーライブラリを使っているが、やはりtypoとかがあるとなかなかバグが気付きにくいので、UIImage, NSUserDefaults, etcなどは型を利用すべきだと思う。リソースに関してもSwiftgenだったり、型安全になるようなコードを自動生成してくれるgeneratorがよくつかわれている印象がある。このようなものをAppleが独自で出してくれることがあればいいのであるが、、
type-safeにNSUserDefaultsを扱うと、
```swift
struct Constants {
	struct Keys {
		enum Account : String {
			case isUserLoggedIn
			....
		}
	}
}
```
ここでExtensionを使う
そうすると結局以下のようにかける
```swift
// Set
UserDefaults.standard.set(true, forKey: .isUserLoggedIn)

// Get
UserDefaults.standard.bool(forKey: .isUserLoggedIn)
```
上記のようにするには、

```swift
protocol BoolDefaultSettable {
	associatedtype BoolKey: RawRepresentable
}
extension BoolDefaultSettable where BoolKey.RawValue == String {
	// getter
	func bool(forKey key: BoolKey) {
		let key = key.rawValue
		return UserDefaults.standard.bool(forKey: key)
	}

	// setter
	func set(_ value: Bool, forKey key: BoolKey) {
		let key = key.rawValue
		UserDefaults.standard.set(value, forkey: key)
	}
}
```
他に関してもこれと同じようなものを用意してあげる。
そうすることで、
```swift
extension UserDefaults: BoolDefaultSettable {
	enum BoolKey : String {
		case isUserLoggedIn
	}
}
```
として上記が実現できる
keyの衝突に対しては、KeyNamespaceableというprotocolを用意してあげる

# Refactoring at scale - Lessons learned rewriting Instagram's feed
IGListKit
インスタグラムのFeedの箇所がUITableViewで各々がセルのようになっており、この上下や間に新たな要素を付け加えたいというような要望があり(おそらく新機能のStoryなど？)、現状だとできない構造だったので、Feedの箇所をIGListKitのような名前のライブラリを自作し、解決したという話。これは各々のセルの箇所をControllerに置き換え、また通常のrealoadDataのような全体ロードよりも最適化されたものを作ったという話。９月中にOSSとして公開予定みたい。またこのライブラリをInstagramはその他の画面でも多く使っているとのこと。
テストや複数プラットフォームでの互換性もあるみたいなので、さすがInstagramだという感じ。公開されたら実際にコードを見てみたい。
ただInstagramみたいなところが悩んでいた問題を解決するようなライブラリなので、そこまで汎用的なのかどうかがわからない。しかも実際に導入するとなると結構根本的な改修が必要そうなので、実用的かどうかはわからない。
