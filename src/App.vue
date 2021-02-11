<template>
  <div id="app">
    <WeatherWidget/>
  </div>
</template>

<script>
import WeatherWidget from './components/WeatherWidget.vue'

export default {
  name: 'App',
  components: {
    WeatherWidget
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background: #1c2541;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
