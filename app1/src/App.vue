<template>
  <div id="app">
    <img
      alt="Vue logo"
      width="70px"
      src="./assets/logo.png"
      @click="incrementCounter"
      style="cursor: pointer"
    />
    <div>APP 1: {{ count }}</div>
  </div>
</template>

<script>
import state from "@demo/store";
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
      return state.count;
    },
  },
  methods: {
    incrementCounter() {
      state.count += 1;
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
