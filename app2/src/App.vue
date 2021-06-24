<template>
  <div id="app">
    <img
      alt="Vue logo"
      width="70px"
      src="./assets/logo.png"
      @click="incrementCounter"
    />
    <div>APP2: {{ count }}</div>
  </div>
</template>

<script>
import { counter, incrementCounter } from "@demo/store";
export default {
  name: "App",
  components: {},
  data() {
    return {
      // count: counter,
    };
  },

  computed: {
    count() {
      return { ...counter };
    },
  },
  watch: {
    count: {
      deep: true,
      handler(v) {
        console.log(v);
      },
    },
  },
  mounted() {
    console.log(counter.value);
  },
  methods: {
    incrementCounter() {
      incrementCounter();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
