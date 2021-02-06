<template>
  <div>
    <h2>Simple reactive state example</h2>
    <Counter
      global-name="timer"
      msg="Time passed since you rendered this component for the first time:"
    />
    <Counter />
    <div class="flex justify-center sm:justify-start">
      <span class="inline-flex mr-2 rounded-md shadow-sm">
        <button
          type="button"
          class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 tabular-nums"
          @click="count++"
        >
          you clicked me {{ count }} times
        </button>
      </span>
      <span class="inline-flex rounded-md shadow-sm">
        <button
          type="button"
          class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-red-700 transition duration-150 ease-in-out bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300"
          @click="count = 0"
        >
          clear
        </button>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Counter from '../components/Counter.vue'

export default defineComponent({
  components: {
    Counter,
  },

  setup() {
    return {
      count: ref(0),
    };
  },
});
</script>