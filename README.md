# NeuroTechCamp Ep.1 - Midnight 404

**"真実は、午前0時の404ページに隠されている"**

NeuroTechCamp 第1話『午前0時の404ページ』で使用された、Webサイトのソースコード一式です。
このリポジトリのコードを使えば、あなたも「特定の時間にだけメッセージが表示される不思議なサイト」を実際に作ることができます。

## 📂 構成

このプロジェクトは2つのパーツで動いています。

1.  **Frontend (表側):** GitHub Pages
    * 見た目はただの「404エラーページ」です。
    * 裏でこっそりBackendと通信しています。
2.  **Backend (裏側):** Google Apps Script (GAS)
    * 現在の時刻を判定します。
    * 深夜0時（またはデバッグモード）の場合のみ、隠されたメッセージを返します。

---

## 🚀 セットアップ手順 (How to Use)

以下の手順で、あなただけの「Midnight 404」サイトを構築してください。

### Step 1: Backend (GAS) の準備
Google Apps Scriptは、GitHub上のコードを直接動かすことができません。手動でGoogleのサーバーにセットする必要があります。

1.  [Google Apps Script](https://script.google.com/) にアクセスし、「新しいプロジェクト」を作成します。
2.  このリポジトリの `gas/code.js` (※) の中身をコピーします。
3.  GASのエディタにある `コード.gs` の中身を消し、コピーしたコードを貼り付けます。
4.  **デプロイ（公開）設定:**
    * 右上の「デプロイ」ボタン > 「新しいデプロイ」を選択。
    * **種類の選択:** 「ウェブアプリ」
    * **アクセスできるユーザー:** **「全員」** (これ重要！誰でもアクセスできるようにしてください)
    * 「デプロイ」ボタンを押します。
5.  発行された **ウェブアプリのURL** （`https://script.google.com/macros/s/.../exec`）をコピーしてメモしておきます。

### Step 2: Frontend (GitHub Pages) の準備

1.  このリポジトリをあなたのGitHubアカウントに **Fork**（コピー）します。
2.  `index.html` ファイルを開き、編集モード（鉛筆アイコン）にします。
3.  コード内の以下の部分を探し、Step 1でコピーした **あなたのGASのURL** に書き換えます。
    ```javascript
    // 書き換え前
    const ENDPOINT = "YOUR_GAS_URL_HERE"; 
    
    // 書き換え例
    const ENDPOINT = "[https://script.google.com/macros/s/xxxxxxxxx/exec](https://script.google.com/macros/s/xxxxxxxxx/exec)";
    ```
4.  変更を保存（Commit）します。
5.  リポジトリの **Settings > Pages** を開き、Branchを `main` に設定して保存します。
6.  数分後、表示されるURLにアクセスしてください。

---

## 🕵️‍♂️ 動作確認 (Investigation)

サイトにアクセスしても、最初はただの「404 Not Found」が表示されるはずです。
しかし、これで正常です。

**真実を暴く方法:**
1.  PCのブラウザで **F12キー**（または右クリック > 検証）を押して、「コンソール (Console)」タブを開きます。
2.  `Access Denied` というログが出ていれば、裏側のシステムは動いています。
3.  **深夜0時** になるのを待つか、GASのコードを書き換えて強制的に時間を突破してください。

## ⚠️ 免責事項
このコードは教育およびエンターテインメント目的で公開されています。悪用は厳禁です。
Welcome to the other side of the protocol.
