<template>
  <div class="prose max-w-none">
    <h1>{{ msg }}</h1>
    <p class="lead">
      Bruuuuuuuhhhhh
    </p>
    <p>
      View this project on
      <a
        href="https://github.com/vincentdoerig/vue3-typescript-tailwind-starter"
      >GitHub</a>. It uses <a href="https://github.com/vitejs/vite">vite</a> to provide a
      fast development experience with hot module replacement. Try it out by
      editing <code>components/HelloWorld.vue</code>.
    </p>
    <p>
      Vue router is also included and configured, you could try navigating to
      <router-link to="/about">
        another page
      </router-link> or to a page that
      <router-link to="/foo">
        does not exist
      </router-link>.
    </p>
    <h2>Installing</h2>
    <p>
      To quickly get started, enter a project name and run the commands below.
    </p>
    <div>
      <label
        for="project-name"
        class="block text-sm font-medium leading-5 text-gray-700"
      >Project name</label>
      <div class="relative max-w-xs mt-1 rounded-md shadow-sm">
        <input
          id="project-name"
          v-model="name"
          type="text"
          class="block w-full rounded sm:text-sm sm:leading-5"
          placeholder="vue3-exploration"
          aria-describedby="text-description"
        >
      </div>
    </div>
    <pre><span class="text-gray-500"># clone the starter</span>
git clone https://github.com/vincentdoerig/vue3-typescript-tailwind-starter {{ name || '&lt;project-name&gt;' }}
cd {{ name || '&lt;project-name&gt;' }}
rm -rf .git <span class="text-gray-500"># remove git folder</span>
git init <span class="text-gray-500"># initialise git for your new project</span></pre>
    <p>
      Alternatively, use this starter by clicking the
      <code>Use this template</code> button on
      <a
        href="https://github.com/vincentdoerig/vue3-typescript-tailwind-starter"
      >GitHub</a>.
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
