---
title: TypstかMarpで作ったスライドを自動公開する
date: 2025-11-05 14:12
tags: ["typst", "marp", "slides", "github-actions"]
categories: "other"
---

そういえばよく使っているので記事にしておきます。

## 概要

友人が作っていた Marp のスライドを GitHub Pages で公開するテンプレートを Typst 用に拡張しました。

友人のテンプレート：
https://github.com/kentakom1213/marp-auto-build

自分が拡張したテンプレート:

https://github.com/nac-39/marp-and-typst-auto-build

## 使い方

詳細は GitHub の方にあるので、そちらを参照してください。

- 各種ファイルの命名規則
  - スライド: `${ProjectName}/slides.typ`
  - 画像: `${ProjectName}/images/`
  - bib ファイル: `${ProjectName}/references.bib`

初回コミットする前に、pre-commit hook を登録することで自動で GitHub Pages に公開する用のファイルが生成されます。

## 最後に

typst でスライドを作るのはいいぞ！！
