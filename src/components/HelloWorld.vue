<template>
  <div class="prose maxlg:prose-sm max-w-none text-center sm:text-left">
    <h1>{{ msg }}</h1>
    <p class="lead">
      This is some example text.
    </p>
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
