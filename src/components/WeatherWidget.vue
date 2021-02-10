<template>
  <div class="self">
    <section class="left">
      <header>
        <p class="day">Wednesday</p>
        <time datetime="2021-02-10">Feb / 10 / 2021</time>
        <p class="city">
        <map-pin-icon size="0.8x" class="custom-class"></map-pin-icon>
        Kralingen, NL</p>
      </header>
      
      <footer>
        <cloud-icon size="5x" class="custom-class"></cloud-icon>
        <p class="temperature">-4°C</p>
        <p class="description">Scattered clouds</p>
      </footer>

    </section>
    <section class="right"></section>
  </div>
</template>

<script>
import { MapPinIcon, CloudIcon } from 'vue-feather-icons'

export default {
  name: 'WeatherWidget',
  props: {
    msg: String
  },
  components: {
    MapPinIcon,
    CloudIcon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.self {
  background: #0b132b;
  width: 800px;
  height: 450px;
  border-radius: 25px;
  color: white;
}
.left {
  position: relative;
  top: -1.3em;
  background: #5BC0BE;
  width: 350px;
  height: 450px;
  padding: 1.3em 2em;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.left .day {
  font-weight: bold;
  font-size: 18pt;
  margin: 0
}
.left .temperature {
  font-weight: 900;
  font-size: 48pt;
  margin: 0;
}
.left .description {
  position: relative;
  font-weight: 600;
  font-size: 16pt;
  margin: 0;
  top: -5pt;
}

</style>
