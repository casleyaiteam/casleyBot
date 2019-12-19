## Name
casley AIchat Bot(仮)
## Overview
キャスレー人事ハンドブックをチャットボット化！
## Description
Lineメッセージから適切なハンドブックのテキスト or pdfを返す
## Demo
例　勤怠連絡　→　メールでチームリーダー、プロジェクトメンバーに伝える。
## Requirement

## Usage

## Install

## Contribution

## Licence

## Author
casley AIteam

## Caution
このリポジトリは非公開になっていないので、
むやみに認証情報等をコミットしないようにしてください。

## Development / Deploy

### Firebase CLI のインストール
OS等により方法が色々あるようなので以下からお好きな方法でインストールしてください。
https://firebase.google.com/docs/cli?hl=ja

### ログイン
```
firebase login
```

### プロジェクトの初期化
```
firebase init
```

選択肢が出るので `Functions` , `JavaScript` を選ぶ。

### 認証情報の設定
GCPコンソールのストレージに、<br>
functionsからstorage内のファイルを読み込むための認証情報のJSONファイルが置いてあります。<br>
`casley-chat-bot-bucket1/chatbot_application_credentials.json` <br>
これをダウンロードしてcloneしてきたソースコードのfunctions/.private/以下に配置する。

### デプロイ
```
firebase deploy --only functions
```