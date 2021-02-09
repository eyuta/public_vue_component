import commonjs from "@rollup/plugin-commonjs"; // CommonJS モジュールを ES6 に変換
import vue from "rollup-plugin-vue"; // .vue 単一ファイルコンポーネントを取得
import buble from "@rollup/plugin-buble"; // 適切にブラウザをサポートするトランスパイラおよびポリフィル
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts", // Path relative to package.json
  output: {
    name: "MyComponent",
    exports: "named",
    sourcemap: true,
    globals: {
      vue: "Vue"
    }
  },
  external: ["Vue"],
  plugins: [
    vue({
      css: true, // css を <style> タグとして注入
      compileTemplate: true // 明示的にテンプレートを描画関数に変換
    }),
    commonjs(),
    buble(), // ES5 へトランスパイルする
    typescript() // A Rollup plugin for seamless integration between Rollup and Typescript.
  ]
};
