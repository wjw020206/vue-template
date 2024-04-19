<template>
  <div id="app">
    {{ count }}
    <nav>
      <button @click="counterStore.increment">Add</button>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <i-ep-avatar />
    </nav>
    <router-view />
    <hello-world />
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store/modules/counter';

const counterStore = useCounterStore();

const { count } = storeToRefs(counterStore);
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
