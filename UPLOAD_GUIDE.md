# AI-Logic Consulting LP アップロード手順書

この手順書は、`ai-logic-consulting-lp` をGitHubへアップロードし、GitHub Pagesで公開するためのものです。

## 事前準備

- GitHubアカウントにログインしておく
- ダウンロードフォルダの `ai-logic-consulting-lp-latest.zip` を展開しておく
- 展開後のフォルダ内に、公開に必要な以下の4ファイルがあることを確認する
  - `index.html`
  - `styles.css`
  - `script.js`
  - `README.md`
- `UPLOAD_GUIDE.md` はこの手順書です。GitHubに一緒にアップロードしても問題ありません。

## 1. GitHubで新しいリポジトリを作る

1. GitHubを開く
2. 右上の `+` から `New repository` を選ぶ
3. Repository name に任意の名前を入力する
   - 例: `ai-logic-consulting-lp`
4. 公開用LPとして使う場合は `Public` を選ぶ
5. `Add a README file` はオフのままでよい
6. `Create repository` を押す

## 2. LPファイルをアップロードする

1. 作成したリポジトリ画面を開く
2. `uploading an existing file` または `Add file` → `Upload files` を選ぶ
3. 展開済みの `ai-logic-consulting-lp` フォルダを開く
4. 中の公開用ファイルをGitHubのアップロード画面へドラッグする
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `UPLOAD_GUIDE.md` は任意
5. 画面下のコミットメッセージはそのまま、または `Add LP files` と入力する
6. `Commit changes` を押す

注意: zipファイルそのものをアップロードするのではなく、展開後の4ファイルをアップロードしてください。GitHub Pagesで表示するには、`index.html` がリポジトリ直下にある必要があります。

## 3. GitHub Pagesを有効にする

1. リポジトリ画面の `Settings` を開く
2. 左メニューの `Pages` を開く
3. `Build and deployment` の `Source` で `Deploy from a branch` を選ぶ
4. `Branch` で `main` を選ぶ
5. フォルダは `/ (root)` を選ぶ
6. `Save` を押す

## 4. 公開URLを確認する

1. 数十秒から数分待つ
2. `Settings` → `Pages` に戻る
3. `Your site is live at ...` に表示されたURLを開く
4. LPが表示されれば公開完了

名刺に載せるURLは、このGitHub PagesのURLです。

## 5. 公開前の最終チェック

- 問い合わせボタンをクリックして、宛先・件名・本文テンプレート入りのGmail作成画面が開くか
- スマホで見たときに文字が読めるか
- ショーリールの横スライドが動くか
- GSAPモーションタイポグラフィが動くか
- 名刺に載せるURLをスマホで開けるか

## 参考

- GitHub Docs: Adding a file to a repository
- GitHub Docs: Configuring a publishing source for your GitHub Pages site
- GitHub Docs: Quickstart for GitHub Pages
