<template>
  <div :class="{dark: darkMode}">
    <div class="bg-gray-300 dark:bg-gray-700 min-h-screen h-full">
      <div class="bg-gray-200 dark:bg-gray-900 p-2 px-4">
        <div class="flex justify-between items-center max-w-5xl mx-auto">
          <h1 class="font-semibold dark:text-white">
            Vue PWA
          </h1>
          <span class="rounded-md shadow-sm">
            <button
              type="button"
              class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-gray-800 dark:bg-gray-700 border border-transparent rounded-md shadow-sm hover:bg-gray-900 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 tabular-nums"
              @click="darkMode = !darkMode"
            >
              {{ darkMode ? "Light" : "Dark" }} Mode
            </button>
          </span>
        </div>
      </div>
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto py-6">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue'
import { globalState } from './store';

export default defineComponent({
  components: {},
  setup() {
    return {
      darkMode: toRef(globalState, "darkMode")
    };
  },
})
</script>
