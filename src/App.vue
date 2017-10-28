<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Artist/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Artist from './components/Artist';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Artist,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
