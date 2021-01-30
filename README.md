https://jp.vuejs.org/v2/cookbook/packaging-sfc-for-npm.html

> その方針ではコンポーネントをブラウザで `<script>` タグを通して直接利用したい人、ランタイム限定ビルドや、 .vue ファイルをどのように扱うかが示されていないビルドを用いる人を排除する事になります。
>
> npm を用いて配布できるように単一ファイルコンポーネントを適切にパッケージ化する事でどこでも利用可能な物としてコンポーネントを共有できるのです！

Vue ファイルとしてだけでなく、コンポーネントとして共有できるようにする

> npm が用いる package.json ファイルにおいて本当は 1 つのバージョン (main) が必要なのですが、それは何も、作成の制限が存在するという事ではありません。ここでは最も一般的な利用ケースとして 2 つの追加バージョン (module および unpkg) を定義し、 browser フィールドを用いて直接 .vue ファイルへのアクセスを提供するとします。例示した package.json は以下のようになります:

<script>alert('aa')</script>

全体的によく分からん
追加バージョン？ 一つのバージョン？
umd? esm? min?

```json
{
  "name": "my-component",
  "version": "1.2.3",
  "main": "dist/my-component.umd.js",
  "module": "dist/my-component.esm.js",
  "unpkg": "dist/my-component.min.js",
  "browser": {
    "./sfc": "src/my-component.vue"
  },
  ...
}
```

name 以外よく分からん。version もどう使われるのか......


[packages/vuetify/src/install.ts](https://github.com/vuetifyjs/vuetify/blob/34a37a06fd49e4c70f47b17e46eaa56716250283/packages/vuetify/src/install.ts#L23)

rollupのテストもできると嬉しい

## 下準備
Dockerで開発

1. [Visual Studio Code Remote - Containers](https://code.visualstudio.com/docs/remote/containers)を使用してDocker環境の構築
  1. `Ctrl + Shift + P` -> `Remote-Containers: Add Development Container Configuration Files...`
  2. 好きなイメージを選択します (私はAlpineイメージを選択しましたが、Node イメージが使いやすいと思います)
  3. VSCodeをリロード

2. 必要なライブラリをインストール
```sh
$ sudo apk add --update nodejs npm yarn
$ yarn add @vue/cli -D # or yarn global add @vue/cli
```

**注意**: Vue CLIは [`vue-cli` ではなく `@vue/cli` を使用します](https://cli.vuejs.org/guide/#overview)。[`vue-cli`はdeprecatedです](https://github.com/vuejs/vue-cli/tree/v2#vue-cli--)。

## create
```sh
$ npx vue create $YOUR_APP_NAME # or vue create $YOUR_APP_NAME

Vue CLI v4.5.11
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, TS, Linter
? Choose a version of Vue.js that you want to start the project with 2.x
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No
? Pick the package manager to use when installing dependencies: Yarn
```

```sh
$ cd $YOUR_APP_NAME
$ yarn serve
```
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/110860/b5c0c88f-d9d5-efcf-2b0a-a79fae5c4590.png)

