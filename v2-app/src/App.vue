<template>
  <div id="app">
    <MyComponent v-model="value" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MyComponent from "@/components/MyComponent.vue";

export default Vue.extend({
  name: "App",
  components: { MyComponent },
  data() {
    return { value: "My Component" };
  }
});
</script>
