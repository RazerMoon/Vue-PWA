<template>
  <div>
    <h2>Simple reactive state example</h2>
    <p>Time passed since you rendered this page: {{ getTime }}</p>
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
import { computed, defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    let timer = ref(0)

    const getTime = computed(() => {
      return `${Math.floor(timer.value/60)} minutes ${timer.value-Math.floor(timer.value/60)*60} seconds`;
    })

    onMounted(async() => {
      setInterval(() => {
        timer.value++
      }, 1000)
    })

    return {
      count: ref(0),
      timer,
      getTime
    };
  },
});
</script>