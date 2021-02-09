<template>
  <input
    type="text"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MyComponent",
  props: {
    value: {
      type: String,
      default: ""
    }
  }
});
</script>
