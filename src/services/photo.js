import axios from 'axios';

const URI_BASE = 'https://untitled-ihuuousf3gce.runkit.sh/';

export async function queryPhoto(keyword) {
  const QUERY = `?query=${keyword}&orientation=portrait`;
  const URI = URI_BASE + QUERY;
  const res = await axios.get(URI);
  const randomIndex = Math.floor(Math.random() * 10);
  return res.data.results[randomIndex].urls.regular;
}

export function getWeatherInformedKeyword(iconCode) {
  switch (iconCode) {
    case '01d':
      return 'sunny';
    case '01n':
      return 'moonlight';
    case '02d':
      return 'scattered clouds';
    case '02n':
      return 'northern lights';
    case '03d':
      return 'cloudy';
    case '03n':
      return 'northern lights';
    case '04d':
      return 'cloudy';
    case '04n':
      return 'northern lights';
    case '09d':
      return 'rain';
    case '09n':
      return 'rain night';
    case '10d':
      return 'rain';
    case '10n':
      return 'rain night';
    case '11d':
      return 'storm clouds';
    case '11n':
      return 'lightning';
    case '13d':
      return 'snowboarding';
    case '13n':
      return 'snow';
    case '50d':
      return 'fog';
    case '50n':
      return 'fog night';
  }
}