<template>
  <div class="self">
    <section class="left" back>
      <div class="gradient-overlay"></div>
      <header>
        <p class="day">Wednesday</p>
        <time datetime="2021-02-10">Feb 10, 2021</time>
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
    <section class="right">
      <p class="metric">
        <b>Precipitation</b>
        <span>40 %</span>
      </p>
      <p class="metric">
        <b>Humidity</b>
        <span>80 %</span>
      </p>
      <p class="metric">
        <b>Wind</b>
        <span>9.21 km/h</span>
      </p>
    </section>
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
  display: flex;
}
.left {
  position: relative;
  padding: 1.3em 2em;
  background: #5BC0BE;
  background-image: url("https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80");
  
  width: 310px;
  max-height: 420px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
  -webkit-transition: -webkit-transform 300ms ease;
  transition: -webkit-transform 300ms ease;
  -o-transition: transform 300ms ease;
  transition: transform 300ms ease;
  transition: transform 300ms ease, -webkit-transform 300ms ease;
  -webkit-transform: translateZ(0) scale(1.02) perspective(1000px);
  transform: translateZ(0) scale(1.02) perspective(1000px);
}
.left:hover {
  -webkit-transform: scale(1.1) perspective(1500px) rotateY(10deg);
  transform: scale(1.1) perspective(1500px) rotateY(10deg);
}

.left .gradient-overlay {
  position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: linear-gradient( 135deg, #72EDF2 10%, #2626a5 100%);
	border-radius: 25px;
	opacity: 0.8;
  z-index: -10;
}
.left .day {
  font-weight: 900;
  font-size: 18pt;
  margin: 0
}
.left .city {
  margin: 0.4em 0 0 0;
}
.left .temperature {
  font-weight: 900;
  font-size: 48pt;
  margin: 0;
}
.left .description {
  position: relative;
  font-weight: 600;
  font-size: 14pt;
  margin: 0;
  top: -5pt;
}
.right {
  padding: 1.3em 2em;
  width: 360px;
}
.right .metric {
  display: flex;
  justify-content: space-between;
}
.right .metric b {
  font-weight: 900;
  font-size: 14pt;
}
</style>
