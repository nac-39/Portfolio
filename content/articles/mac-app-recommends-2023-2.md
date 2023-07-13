---
title: Macおすすめのソフト＆セットアップ2023春(プログラミング編)
date: 2023-03-10 12:28:21
tags:
  - mac
categories:
  - tips
---

## 対象読者

- この春 Mac を新しく買った名大生
- Mac を持っているけど、いまいち使いこなせておらず、もっと便利なアプリを探している名大生

に向けて、買ったばかりのまっさらの Mac をセットアップしていく想定で記事を書いていきます。

プログラミング編では、ちょっとプログラミングやってみたい、と言う人に向けたセットアップを書いていきます。
実際にコードの実行環境を作るところまで書くと大変なので、コードを書くときに便利なソフトに絞って解説していきます。

とりあえず、どんなプログラミング言語を書くにも必要なエディタ、ターミナル、HomeBrew のインストールをしていきましょう。

<!-- more -->

## １にも２にもエディタ

とりあえず、エディタをインストールしましょう。
エディタはプログラムを編集するためのソフトです。Windows のメモ帳、Mac のテキストエディットの超高機能版、といったイメージです。  
まずエディタは VSCode をおすすめします。こちらからダウンロードしましょう。

- [Visual Studio Code](https://azure.microsoft.com/ja-jp/products/visual-studio-code)

他にもエディタは JetBrains 製品とか、Vim とか Emacs とか nano とか色々あるのですが、汎用的に初心者が使う分には VSCode がいいです。(JetBrains 製品は言語ごとに別のソフトになっていて、言語によっては VSCode よりも痒いところに手が届いたりします。Vim, Emacs, nano はキーボードから手を離したくない玄人向けのエディタです。私は Vim 推しです。)

## 黒い画面

エディタ、ブラウザの次にプログラムを書くときによく使うのが、ターミナル（黒い画面）です。
Mac のデフォルトのターミナルを見てみましょう。⌘+Space を押して Spotlight 検索を出し、「ターミナル」と検索してみてください。ターミナルのウィンドウが開きましたか？

```bash
<名前>@<名前>noMacBook-Air ~ %
```

みたいな、黒または白の文字だけの画面が出てくると思います。

試しにちょっとコマンドを打ってみましょう。

```bash
% cal
```

と打ってみましょう。**`%`は入力しません**。

```plaintext
% cal
      3月 2023
日 月 火 水 木 金 土
          1  2  3  4
 5  6  7  8  9 10 11
12 13 14 15 16 17 18
19 20 21 22 23 24 25
26 27 28 29 30 31
```

出てきましたか？`cal`コマンドは元々入っているコマンドの一つで、見ての通りカレンダーを表示してくれます。開発では全く使うことはないです…笑

開発でよく使うコマンドは例えばこの辺をみるとまとまってます。全部を理解する必要はないので、ざっとコマンドの名前だけ覚えておいて、本などで見かけたらここで詳細を確認するぐらいでいいと思います。
[https://github.com/uchan-nos/os-from-zero/wiki/Basic-Linux-Commands](https://github.com/uchan-nos/os-from-zero/wiki/Basic-Linux-Commands)

遊ぶのはここまでにして、ターミナルのソフトもダウンロードしておきましょう。

- [iTerm2](https://iterm2.com)

デフォルトでついてるターミナルでもいいのですが、こっちの方が痒いところに手が届くのでおすすめです。

## HomeBrew

続いて、iTerm またはターミナルを開いて、HomeBrew をダウンロードしましょう。

- [HomeBrew](https://brew.sh/index_ja)

こちらのサイトに書いてある通り、

```bash
% /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

こちらをターミナルにコピペして、Enter してください。言われた通りにすると、コマンドがダウンロードできます。（**`%`は入力しません**。）

HomeBrew は Mac 用のパッケージマネージャーです。雑に言うと、Mac に元々入っていないコマンドをインストールするためのコマンドです。

試しに一つコマンドを入れてみましょう。`brew`は今インストールした HomeBrew のコマンドです。

```bash
% brew install cowsay
```

これで`cowsay`コマンドをインストールできます。使ってみましょう。

```bash
% cowsay hello world
```

次のように表示されましたか？

```plaintext
% cowsay hello world
 _____________
< hello world >
 -------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

`cowsay`はジョークコマンドの一つで、`cowsay`の後に入力した言葉を牛が吹き出しで喋ってくれるコマンドです。これも実際に使う場面があるかと言われるとないですが、かわいいので覚えておきましょう笑。

## 次は何する？

ここまででエディタ、ターミナル、HomeBrew の全てが揃いました。次は、実際に言語ごとの環境を整備するだけです。この記事では触れず、どのように検索すればいいかだけ書いておこうと思います。

まず、あなたがやりたいのはどんなプログラミングでしょうか？

プログラミングと一口に言っても、いろいろあります。

- Youtube や twitter みたいな Web アプリを作りたい！
- ゲームアプリを作りたい！
- TODO リストみたいなスマホの便利アプリを作りたい！
- AI とか機械学習とかを触りたい！
- IoT とかやってみたい！
- なんでもいいからコードというものを書いてみたい！
- OS を作りたい！（おそらく、あなたは対象読者ではありません。）
- コンパイラを作りたい（同上）

### Tips: プログラミング言語の勉強のコツ

これが正解だ！と言うわけではなく、個人的に思っていることですが…

- プログラミング自体初めてだ、という場合  
  とりあえず、初心者用の書籍やウェブサイトを一通り進めてみるのがいいと思います。この場合、ある言語の公式サイトのようなものは難しく感じると思うのでおすすめしません。  
  本を読むときは、読むだけで理解した気になるのはあまりおすすめしません。自分で何かを１から作るときは「コードを書く → 実行してみる → エラーだ、動かん！→ 直す → またエラーだ、動かん！→ 動いた！→ 次のコードを書く」というように試行錯誤が必要です。読むだけで理解した気になっていると、「コードには完璧な正解があるはずだ」という思い込みをしてしまい、自分でコードを書くときに試行錯誤をせずに動かなかったら諦めてしまいます。それではいつまで経っても動くものは作れません。また、エラーを読んで直すのにも慣れが必要です。  
  だから、進めるのは遅くてもいいから、コードを打って、一つ一つ動作を確認しながら進めるのをおすすめします。  
  web サイトで勉強したい場合、「ハンズオン」とか「チュートリアル」とかで検索して、手を動かしながら学べる形式のものを探すといいでしょう。
- 何か一つは書ける言語がある、という場合  
  学びたい言語の公式サイトなどのチュートリアルをおすすめします。この言語のこれは、すでに知っている言語のあれだ！という変換をしながら進めていけば、最初の言語よりも早く習得できるのではないでしょうか。

### 最初の検索ワード

ほとんどのプログラミング言語は環境構築が必要です。
例えば Python を触ってみたいと思った場合、「Python mac 環境構築」で調べてみましょう。

そして、環境構築ができたら（環境構築が意外に難しかったりするんですけどね…）プログラミング言語の検索をしてみましょう。環境構築がなんか上手くできなかったら、諦める前に知ってそうな人に尋ねてください（私に DM してもらっても大丈夫です、使ったことないものだとわからないかもしれないけど…）。

それぞれ、このような検索ワードでググってみると最初に何をやればいいかわかるのではないでしょうか。

あとは、最近流行りの ChatGPT に質問してみるのもいいかもしれません。

- Web アプリ：
  - 「html css チュートリアル」
  - javascript: [https://jsprimer.net](https://jsprimer.net)
  - 「python flask 入門」
  - 「vue ハンズオン」←html, css, js はわかる人向け
  - 「React ハンズオン」←html, css, js はわかる人向け
  - 「Ruby on Rails ハンズオン」
- ゲーム： 「unity チュートリアル」
- AI・機械学習：
  - Python を使うイメージがある
  - [https://www.kaggle.com](https://www.kaggle.com)
- アプリ（iPhone 限定）：
  - 「xcode インストール」
  - 「swift ui チュートリアル」
- アプリ（iPhone も Android も）：
  - 「flutter mac 環境構築」
  - 「flutter チュートリアル」
  - 「flutter ハンズオン」
- アプリ（Android のみ）:
  - 「android studio mac 環境構築」
  - 「kotlin ハンズオン」
- IoT
  - ラズパイ
  - Arduino
  - M5Stack
- OS:
  - 「みかん本」
- コンパイラ：
  - 「低レイヤを知りたい人のための C コンパイラ作成入門」

## 終わりに

長くなってしまいましたが、何かプログラミング言語を初めてみたいという人の助けになってれば幸いです。

次の上級編では、基本編では紹介しきれなかった若干マニアックな Mac に入れておくと便利なソフトやテクニック？を紹介しようと思います。