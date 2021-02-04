<template>
  <div class="article">
    <h1>{{ msg }}</h1>
    <p class="lead">
      This is some example text.
    </p>
    <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
    <p>Here is <router-link to="/about">another page</router-link>.</p>
    <StateExample />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import StateExample from '../components/StateExample.vue'

export default defineComponent({
  components: {
    StateExample,
  },

  props: {
    msg: {
      type: String,
      default: "",
    },
  },

  setup() {
    return {
      name: ref(""),
    };
  },
});
</script>
