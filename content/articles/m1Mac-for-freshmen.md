---
title: M1Macを買おうか迷っている新入生へ
date: 2022-03-05 18:22:24
tags:
categories:
---

M1 Mac は普段の大学生活で使う分には何も困らないです．起動爆速，サクサクで良いです．Office 系は普通に使えます．（学部/学科で指定がある場合はそれに従うべき．工学部とか？）

<!-- more -->

Apple 製品との連携も魅力だとよく言われます．ただ，大学からもらえるクラウドストレージは OneDrive 1TB なので，基本的に文章の同期はそこで行うことになり，Apple 製品の連携(=iCloud で同期)の魅力はあまり感じないかもしれません．
ただし，生協の Mac は買う前にほかの選択肢も考えてみてください．Apple Store で買ったら去年はギフトカードでいくらか返ってきたりしました．Mac を買って貰ったギフトカードで iPad を買うのも手かもしれません．ひとまず Apple の学生・教職員用のページを一回調べてみてください．

## 間違い・変な表現などを見つけた方へ

Twitter の DM か何かで教えてください．お願いします．

## M1Mac と IntelMac，は何が違うのか？

「アーキテクチャ」が違います．M1Mac は ARM 社が作った CPU を使っていて，Inrtel Mac やほとんどの Windows PC は Intel 社が作った CPU を使っています．

そもそも CPU(Central Processing Unit, 中央演算装置)とは何でしょうか？これはよくコンピュータの頭脳に例えられます．ただひたすらに命令された演算をこなしていく装置です．CPU は性能が高い＝処理速度が速くなります．頭の回転が速くなるイメージです．
次に，コンピュータの仕組みについて確認していきましょう．コンピュータの内部は全てが 0 と 1 の 2 進数で表される世界だというのはよく知られていると思います（電圧の高低が 0 と 1 に対応します）．でも，普段私たちがプログラミングするときは２進数をコンピュータに打ち込むのではなく，例えば ↓

```c++

int main(){
    int a=1, b=2;
    cout << a + b << endl;
}

```

このような人間にもわかる文字で書かれた言語を用います．ではこれを誰がどのようにして 0 と 1 の２進数に変換しているのでしょうか．このコードはコンパイラというソフトウェアによって解析されて，機械語に翻訳されたあと，0 と 1 で書かれたバイナリファイルと呼ばれるファイルに変更されます．

ここで！やっと CPU の違いが関係してきます．この機械語には色々な種類があります．その種類の一つ一つを命令セットというのですが，この命令セットが CPU を作っている会社ごとに違っているのです．日本人は日本語しか理解できず中国人は中国語しか理解できないみたいな感じです．だから，ARM 社が作っている CPU は ARM 語しか理解して実行することができないし，Intel 社の CPU は Intel 語しかできません．（普通命令セットのことを〇〇語とは言わないです，例えです）
つまり，ARM の CPU は ARM 語から生成された ARM 用のバイナリしか実行できないと言うことになります．

上のようなソースコードが CPU が実行できる形にこのようなプログラミング言語は基本的にどのような CPU やアーキテクチャでも同じものを用いることができています．これはどう言うことでしょうか？実はコンパイラがそれぞれの機械語に合わせてバイナリコードを生成しているのです．結果的にこのコードは M1Mac でも Intel の PC でも同じように実行することができるということです．

つまり，M1Mac と IntelMac の違いは使用している CPU の命令セットが違い，実行できるバイナリファイルの形式も違っていると言うことです．

## M1Mac で困るのはどんな時か？

M1 以前の Mac はは Intel の CPU が搭載されているので，世の中にあるソフトウェアは大抵 Intel 用のバイナリで出力されています．
じゃあ ARM の CPU が使われている M1Mac はそれら全てが実行できないじゃないか！！と思ったかもしれません．

しかし，そんなことはありません．Apple は Rosetta2 という Intel 用のバイナリを ARM 用のバイナリに変換してくれるソフトウェアを開発しているのです！！
このソフトウェアを使えば普通につかう GUI のソフトウェアは大抵 Intel の CPU と変わらずにうまく動きます（うまく動かない場合もあります，それは使いたいソフトを実際に動かした人のレビューをみて確認しましょう）．それに，M1 が発表されてから一年も立っているので，また，M1Mac 用のバイナリを配布してくれているソフトも見かけます．

ということで，普通の用途に使う分には全然困らないと思います．ユーザーが多い有名なソフトは多分大丈夫です．
(※そもそも Windows 用にしか配布されてないソフトウェアももちろんあります．Windows のソフトは Intel Mac でも実行できないです．)

### じゃあどんなときに困るのか？

例えば，M1Mac 上に仮想環境を作ろうと思った時に困ります．仮想環境というのは，パソコンの中にもう一つパソコンがあることをシミュレーションする，みたいなイメージです．
そこで，普通 Intel の CPU が使われる Windows の仮想環境をを Mac の中に立てたいと思ったとしましょう．しかし，Windows の OS は普通 Intel 用のバイナリファイルなので，これを直接実行することはできません．
あとは開発用に Linux という OS の仮想環境を Docker というツールを使って立てたいことがあります．こういう時にも仮想環境がうまく動かない場合があります．あるソフトウェアをクロスコンパイルしする場合とか…………．
これ以外困らないとは言えないですが，私が遭遇したのはこういう類の仮想環境周りだけなのでこの辺にしておきます．

あとは M1Mac だけで機械学習するのは厳しいかもしれません（初心者の感想）．全然詳しくないけどちょっとやってみたレベルですが（だから他に方法があるのかもしれないですが），gpu が使えず cpu でしか実行できないので計算がめっちゃ遅くて何日か待っても全然終わらなかったことがありました．大人しく Google Colab 使うのがいいと思います．それかお金貯めていいグラボがついてるデスクトップ PC を買う．

### ちなみに……

私が所属する自然情報学科では，一年次に Python と C 言語を授業でやります．この授業の時にアーキテクチャ周りで困ることはなかったです．
C 言語は秋学期なので全然今は気にしなくていいです．C 言語は Windows の環境構築しか紹介されないですが，mac には C 言語のコンパイラが確かついているはずなので，大丈夫だと思います(clang ってやつです)．(XCode をインストールした時に一緒についてくる開発者ツールに入っていたものかも，忘れた)
「C 言語 環境構築 mac」とかで調べたら出てくると思います．ちなみにコンパイラは clang の他に gcc っていうのもあります．

## まとめ

M1Mac は普段の学生生活においてはかっこいいしサクサクだし，困らんし，いいと思います．お勧めできます．
でも開発するときに詰まることがあるかもしれないです．

# 参考

- [ソフトウェア基礎技術研修](http://ocw.kyushu-u.ac.jp/menu/faculty/09/4/6.pdf)
- [コンパイラとは？仕組みやインタプリタ・アセンブラとの違いについて解説](https://tech-camp.in/note/technology/93686/)
- [インタプリタの仕組みをインタプリタ開発者が解説](https://yu-nix.com/blog/2020/11/17/interpreter-design/)
- [[新卒が作る自作 OS]コンパイラの仕組み](https://tech-lab.sios.jp/archives/21161)
- [「分かりそう」で「分からない」でも「分かった」気になれる IT 用語辞典:アーキテクチャ](https://wa3.i-3-i.info/word16015.html)
