---
title: NUCTのカレンダーをTrelloにうつす
date: 2021-11-22 00:57:11
tags: NUCT
categories: NUCT
---

前，GAS で NUCT のカレンダーを Google Tasks に変換するというのをやったのですが，それの Trello バージョンを作りました．

真面目な動機としては，Google Tasks だとファイルとの連携が URL からしかできなくて面倒だと思ったからです．例えば，レポートのタスクと word ファイルが一緒になってたら便利じゃないですか？Trello なら，きこーアカウントの OneDrive 上のファイルとタスクを紐付けることができます．

<!-- more -->

## 使い方

1. Google Spread Sheet を新しく作って，A1 セルに最終更新と書きましょう．(なんか)
2. 上のタブの拡張機能＞ Google App Script から新しい GAS を作ります．
3. 下のコードを全てファイルを分けてコピペします．
4. functions.gs に移動して，setup()を実行します．
5. トリガーを設定します．実行する関数は update(),時間指定のトリガーにしましょう．間隔はなんでもいいけど，私は二時間にしてます．
   あとはほっといたら trello に勝手にタスクが追加されてるはずです．

何より，タスク管理ツールを使う以前に，タスクをやり切る心意気を持ちましょう．

コードはこちら ↓

[https://gist.github.com/nac-39/e75048b950b4be91917a78d590e64065](https://gist.github.com/nac-39/e75048b950b4be91917a78d590e64065)
