<template>
  <div id="app">
    <Intro/>
  </div>
</template>

<script>
import Intro from './components/Intro'

export default {
  name: 'App',
  components: {
    Intro
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
</style>
