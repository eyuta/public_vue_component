import { VueConstructor } from "vue";

// Vue.use() によって実行される install 関数を定義
export interface Install {
  (Vue: VueConstructor): void;
  installed: boolean;
}

export default class MyComponent {
  static install: Install;
}

export const component: VueConstructor;
