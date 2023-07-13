---
title: gatherのbotの解説
date: 2023-05-27 14:09:26
tags: ["gather", "slack", "tool", "coding", "JavaScript"]
categories: "tips"
---

過去に gather_bot の作り方について解説した文章が出てきたので、公開しておきます。これを書いたのは 2021 年で、現在も情報が正しいかは検証していません。すみません。気が向いたら更新します…

こちらのコードを書いた時の解説になります。
[https://github.com/nac-39/slack-bot_gather_member](https://github.com/nac-39/slack-bot_gather_member)

<!-- more -->

## bot を作った背景

所属しているサークルで gather を導入しており、外からだと何人そのスペースにいるかはわかるけど、誰がいるのかはわからないため gather に入りづらいという問題が起こっていました（人数多いし盛り上がってるのかな？と思って入ったら先輩しかいなくて気まずい等）。そこで色々考えたのですが、最終的に slack の bot を作るということに落ち着きました。

## slack-bot_gather_member のコードの解説

制作に使用したのが、npm で配布されている gather のライブラリで、gather-game-client です。
URL: https://www.npmjs.com/package/@gathertown/gather-game-client

npm なので nodejs で使うことができます。nodejs はサーバーサイドで動く javascript です。
gather の api-key を gather にロクインした状態で  [https://gather.town/apiKeys](https://gather.town/apiKeys)  ここから取得し、環境変数に入れるか、.env ファイルに記述して nodejs の dotenv ライブラリを使って読み込みます。あとは諸々を初期化します。

```javascript
import { Game } from "@gathertown/gather-game-client"
import dotenv from "dotenv"
import webSocket from "isomorphic-ws"

dotenv.config() //.envファイルを読み込めるようにする
global.WebSocket = webSocket //websocketの何かの初期化
```

```javascript
const onConnected = (connected) => {
  console.log("Connected: ", connected)
  game.enter(process.env.SPACE_ID)
  console.log(Object.keys(game.players))
  console.log(game.getStats())
}
// gatherのgameクラス初期化
const game = new Game(process.env.SPACE_ID, () =>
  Promise.resolve({ apiKey: process.env.API_KEY })
)
game.connect()
game.subscribeToConnection(onConnected)
```

これで自分のアカウントがログインしているスペースの情報をゲットする準備が出来ました。
あとは、game クラスに含まれている諸々の関数を使って色々な情報をゲットすることができます。
例えば、プレイヤーがスペースに入ったことを検知するには`game.subscribeToEvent`という関数が使えます。

```javascript
game.subscribeToEvent("playerJoins", (player) => {
	console.log("playerJoined");
	setTimeout(async () => {
		Object.keys(game.players).forEach((e) => {
		console.log(game.getPlayer(e));
	}, 5000); // プレイヤーが入室してからgame.playersに反映されるのに少し時間がかる
});
```

この subscribeToEvent の第一引数に何が入るかは[ここ](http://gather-game-client-docs.s3-website-us-west-2.amazonaws.com/classes/Game.html#subscribeToEvent)に書いてあります。

私がやったことあるのはここまでなので、マップの操作とかはわからないです。

## もろもろ

- Gather の API は後方互換性とかはあまり考えずに開発していくそうなので、もしかしたらコードが古くなると使えなくなるかもしれません。（websocket api のドキュメントに書いてありましたし、実際 v35->v36 に上がった時に動かなくなりました。npm のバージョンを上げたら動きましたがいつ動かなくなるかわかりません。）
- github に Dockerfile も上げてあるので、その環境でなら動作するはずです。
- slack に投稿する方は slack bolt というライブラリを使いました。http 叩くコードを書かなくて良いのでとても楽です。

## gather の API 系お役立ちリンク集

- 自分と同じように困っている人が大概いる forum：
  - [https://forum.gather.town/](https://forum.gather.town/)
  - ほとんどここのコードを参考にしました。
- gather の http の api
  - ドキュメント：[https://www.notion.so/Gather-HTTP-API-3bbf6c59325f40aca7ef5ce14c677444](https://www.notion.so/Gather-HTTP-API-3bbf6c59325f40aca7ef5ce14c677444)
  - Nodejs ラッパー：[https://github.com/warengonzaga/gathertown.js](https://github.com/warengonzaga/gathertown.js)
- gather の websocket の api：

  - [https://gathertown.notion.site/Gather-Websocket-API-bf2d5d4526db412590c3579c36141063](https://gathertown.notion.site/Gather-Websocket-API-bf2d5d4526db412590c3579c36141063)
  - API の詳細なドキュメント：[http://gather-game-client-docs.s3-website-us-west-2.amazonaws.com/index.html](http://gather-game-client-docs.s3-website-us-west-2.amazonaws.com/index.html)

- gather にいる人が slack からわかるプロダクト。DM とかもできるらしい：
  - [https://twitter.com/DRFR0ST/status/1510071716999049219](https://twitter.com/DRFR0ST/status/1510071716999049219)
