---
title: "Androidの音楽アプリの最適解を求めて"
description: "SpotifyやLINE Musicをはじめとした，サブスク型のストリーミングサービスが対抗する中，まだまだ自前のmp3ファイル等をスマホで再生したいときもあるはずです..."
date: 2024-12-17T23:41:03+09:00
image: ""
categories: ["スマホ"]
authors: ["shiragi"]
tags: ["アプリ"]
draft: true
---

## はじめに

SpotifyやLINE Musicをはじめとした，サブスク型のストリーミングサービスが対抗する中，まだまだ自前のmp3ファイル等をスマホで再生したいときもあるはずです．

iPhone（iOS）はミュージックアプリがその役を担っています．

では，Androidはいかかでしょうか．実はこのアプリ探しが意外にも大変でありましたので，その記録をこのnoteに記そうと思います．

## スマホベンダーの純正アプリ

Androidスマホで，音楽アプリといったら，真っ先に目にするのはおそらくプリインストールされたアプリだと思います．

SamsungのGalaxyシリーズならSamsung Music（端末内では"Galaxy Music"と表記），XiaomiならMi Music，SonyのXperiaならミュージック，なかにはNTT ドコモのプリインストールアプリを使っている方もいるはずです．

### Samsung Musicはよかった
<div style="display: flex;justify-content: center;flex-direction: column;align-items: center;">
<img src="/images/posts/02-1.webp" width="50%" height="50%">
Samsung Musicの画面
</div>

私もGalaxyシリーズを使っていた時は，Samsung Musicを愛用していました．なぜなら，とても使いやすかったからなのです．One UIの一端の名に恥じぬ，細かいところまで行き届いた設計で，非常に心地よいユーザー体験でした．

具体例を挙げると

- デザインがきれい

- タスク一覧（Androidの◁〇□のうち□を押すと出てくる画面）からアプリを消しても再生し続ける．

- アプリを立ち上げなくても，通知にあれば直接再生できる．

- アプリを立ち上げなくても，ロック画面から直接再生できる．

- アプリを立ち上げなくても，Bluetooth Audioデバイスから再生ボタンを押したらすぐに再生できる．

- ロック画面に専用の再生画面がある．その画面ではリピートやシャッフル，キューの一覧を確認したり，選択したりできる．

当たり前のように思えて，他のアプリでは実現していない機能ばかりでした．

しかし，Samsung Musicにも1つ欠点があります．

それは，他ベンダーのスマホではインストールできないことです．

スマホを買い替えてからアプリが使えなくなり，仕方なく乗換先を探さなければならなくなりました．

## 私が求める音楽アプリ

- タスク一覧（Androidの◁〇□のうち□を押すと出てくる画面）からアプリを消しても再生し続ける．

- アプリを立ち上げなくても，通知にあれば直接再生できる．

- アプリを立ち上げなくても，ロック画面から直接再生できる．

- アプリを立ち上げなくても，Bluetooth Audioデバイスから再生ボタンを押したらすぐに再生できる．

- M3U8プレイリストがインポートできる．

- android.permission.INTERNET はないのが望ましい．（歌詞取得機能やジャケット自動取得機能はいらない）

- デザインはある程度整っててほしい．

かなり厳しい印象を持たれると思います．しかし，Samsung Musicを味わってしまった私には，これらの条件が1つでもないものは，毎日お世話になるアプリであることも相まってどうしても不満点になってしまうのです．

## YouTube Music

<div style="display: flex;justify-content: center;flex-direction: column;align-items: center;">
<img src="/images/posts/02-2.webp" width="50%" height="50%">
YouTube Musicデザインはきれい
</div>

実はAndroidには，もう１つプリインストールされた音楽アプリがあります．それは上述の通り，YouTube Musicアプリです．れっきとしたサブスク型のストリーミングアプリですが，ローカルストレージ内の音声ファイルを再生する機能も有しています．

天下のGoogle様は様様というべきか，私が求めるアプリのすべての条件を満たしていました．

しかし，致命的な欠点が1つありました．

それは，アプリ起動時に毎回毎回ロード時間がかかることです．
<div style="display: flex;justify-content: center;flex-direction: column;align-items: center;">
<img src="/images/posts/02-3.webp" width="50%" height="50%">
毎回このクルクルの画面を見る
</div>

そのため，残念ながら選択肢から外れました．

## Simple Music Player
<div style="display: flex;justify-content: center;flex-direction: column;align-items: center;">
<img src="/images/posts/02-4.webp" width="50%" height="50%">
Simple Music Playerの画面
</div>

プリインストールアプリの選択肢がなくなってしまったので，ここからは3rd partyアプリです．

まず検討したのが，こちらのSimple Music Playerです．

名前の通り，デザインはとてもシンプルです．シンプルすぎるとも見れますが，私個人的には好印象でした．

しかし，欠点がありました．それは，一部ファイル形式(Oggなど)のアルバムジャケットが読み取り出来ていないことです．

<div style="display: flex;justify-content: center;flex-direction: column;align-items: center;">
<img src="/images/posts/02-5.webp" width="50%" height="50%">
このアルバム，本当は全曲にアルバムジャケットがあるのですが…
</div>

ジャケットなくても聞く分には困らないのですが，少し物足りない感は否めなかったので選択肢から外れました．

## Retro Music
<div style="display: flex;justify-content: center;flex-direction: column;align-items: center;">
<img src="/images/posts/02-6.webp" width="50%" height="50%">
Retro Musicの画面
</div>

次に検討したのが，こちらのRetro Musicでした．

Retro Music Playerは，F-Droid版の場合，Google Play版のPro機能がすべて無料で使えます．

デザインは売りにしていることもあってか，非常に洗練されていて，一見好印象でした．

しかし，このアプリにも欠点がありました．

<div style="display: flex;justify-content: center;flex-direction: column;align-items: center;">
<img src="/images/posts/02-7.webp" width="50%" height="50%">
ボタン押しても再生できない…
</div>

それは，タスクキルすると，通知画面のコントローラーがうまく動作しなくなることです．

また，リピートやシャッフルがいつの間にか無効化されていることもまれにありました．

せっかくデザインが好印象なのに，残念に感じました．
そのため，選択肢としては残しましたが，他も検討することにしました．

## Musicolot
<div style="display: flex;justify-content: center;flex-direction: column;align-items: center;">
<img src="/images/posts/02-8.png" width="50%" height="50%">
Musicolotの画面
</div>

さらに試したのは，こちらの[Musicolot](https://play.google.com/store/apps/details?id=in.krosbits.musicolet&hl=ja)です．

GoogleでAndroid向け音楽アプリを探していると，いつも人気の上位に上がっているアプリです．

実際使ってみると，人気のわけもすぐにわかりました．

とにかくいろいろ高機能だったのです．特に私が気に入ったのはこのロック画面専用コントローラーでした．

<div style="display: flex;justify-content: center;flex-direction: column;align-items: center;">
<img src="/images/posts/02-9.png" width="50%" height="50%">
ロック画面で表示されるコントローラー
</div>

ロック画面の最中でも，キューから曲を選ぶ捜査ができて