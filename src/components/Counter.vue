<template>
  <p>{{ msg }}<pre class="w-60">{{ getTime }}</pre></p>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, ref, toRef } from "vue";
import { globalState } from "../store";

export default defineComponent({
  props: {
    globalName: {
      type: String,
      default: "",
    },
    msg: {
      type: String,
      default: "Time passed since you rendered this component:",
    }
  },

  setup(props) {
    let timer = (props.globalName.length === 0 || !(props.globalName in globalState)) ? ref(0) : toRef(globalState, props.globalName as "timer") // ! This is dependent on a specific global state name, do not try to copy and paste into another project.
    let timerUpdate: number|undefined

    const getTime = computed(() => {
      return `${Math.floor(timer.value/60)} minutes and ${timer.value-Math.floor(timer.value/60)*60} seconds`;
    })

    onMounted(async() => {
      timerUpdate = setInterval(() => {
        timer.value++
      }, 1000)
    })

    onUnmounted(() => {
      clearInterval(timerUpdate)
    })

    return {
      timer,
      getTime
    };
  },
});
</script>