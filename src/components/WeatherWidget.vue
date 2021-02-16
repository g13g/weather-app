<template>
  <div class="self">
    <section class="left" :style="{ backgroundImage: 'url(' + photoURI + ')' }">
      <div class="gradient-overlay"></div>
      <header>
        <p class="day">{{dayOfTheWeek}}</p>
        <time datetime="2021-02-10">{{dateFormatted}}</time>
        <p class="city">
        <map-pin-icon size="0.8x" class="custom-class"></map-pin-icon>
        {{city}}</p>
      </header>
      
      <footer>
        <component :is="iconName" size="5x"></component>
        <p class="temperature">{{temperature}}°C</p>
        <p class="description capitalize">{{weatherDescription}}</p>
      </footer>

    </section>
    <section class="right">
      <header>
        <p class="metric">
          <b>Cloudiness</b>
          <span>{{cloudiness}} %</span>
        </p>
        <p class="metric">
          <b>Humidity</b>
          <span>{{humidity}} %</span>
        </p>
        <p class="metric">
          <b>Wind</b>
          <span>{{wind}} m/s</span>
        </p>
      </header>
      <footer>
        <p>weather forecast goes here...</p>
      </footer>
    </section>
  </div>
</template>

<script>
import { MapPinIcon, SunIcon, CircleIcon, CloudIcon, CloudDrizzleIcon, CloudRainIcon, CloudLightningIcon, CloudSnowIcon, AlignCenterIcon } from 'vue-feather-icons';
import moment from 'moment';
import { getWeatherByGeo, getWeatherByCityName, getIconName } from '../services/weather';
import { queryPhoto, getWeatherInformedKeyword } from '../services/photo';

export default {
  name: 'WeatherWidget',
  data() {
    return {
      dayOfTheWeek: this.getWeekDay(),
      dateFormatted: this.getFormattedDate(),
      geo: null,
      city: 'Barcelona', // use initially, overwrite after geolocation set
      temperature: 23,
      weatherDescription: 'Clear Sky',
      iconCode: '01d',
      wind: null,
      humidity: null,
      cloudiness: null,
      photoURI: null,
    };
  },
  computed: {
    iconName() {
      return getIconName(this.iconCode);
    },
  },
  methods: {
    getWeekDay() {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var d = new Date();
      var n = d.getDay()
      return days[n];
    },
    getFormattedDate() {
      return moment().format('MMM D, YYYY');
    },
    getPosition() {
      return new Promise((resolve, reject) => 
          navigator.geolocation.getCurrentPosition(resolve, reject)
      );
    },
    async requestAndSetGeolocation() {
      try {
        const position = await this.getPosition();
        this.geo = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }        
      } catch (err) {
        console.error(err.message);
      }
    },
    async setWeatherData() {
      var data = null;
      if (this.geo) {
        data = await getWeatherByGeo(this.geo.lat, this.geo.lon)
      } else {
        data = await getWeatherByCityName(this.city);
      } 
       
      // Overall weather
      const weather = data.weather[0];
      this.iconCode = weather.icon;
      this.weatherDescription = weather.description;
      this.city = `${data.name}, ${data.sys.country}`;

      // Metrics
      this.temperature = data.main.temp;
      this.wind = data.wind.speed;
      this.humidity = data.main.humidity;
      this.cloudiness = data.clouds.all;

      // Set weather-informed photo
      await this.setPhoto();
    },
    async setPhoto() {
      if (!this.photoURI) {
        const keyword = getWeatherInformedKeyword(this.iconCode);
        console.log(keyword);
        this.photoURI = await queryPhoto(keyword);
      }
    }
  },
  async mounted() {
    if (!this.geo) this.setWeatherData();
    try {
      await this.requestAndSetGeolocation();
      if (this.geo) {
        this.setWeatherData();
      } 
    } catch (error) {
      console.log(error);
    }
  },
  components: {
    MapPinIcon,
    SunIcon,
    CircleIcon,
    CloudIcon,
    CloudDrizzleIcon,
    CloudRainIcon,
    CloudLightningIcon,
    CloudSnowIcon,
    AlignCenterIcon,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.self {
  background: #0b132b;
  width: 740px;
  height: 450px;
  border-radius: 25px;
  color: white;
  display: flex;
}
.left {
  position: relative;
  padding: 1.3em 2em;
  background: #5BC0BE;
  background-position: center center;
  background-size: cover;
  
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
	opacity: 0.7;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.right .metric {
  display: flex;
  justify-content: space-between;
}
.right .metric b {
  font-weight: 900;
  font-size: 14pt;
}
.right footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5em;
}
p.capitalize {
  text-transform: capitalize;
}
</style>
