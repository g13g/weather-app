import axios from 'axios';

const URI_BASE = `https://runkit.io/g13g/602547055dd629001a1c9b43/branches/master`;

export async function getWeatherByCityName(city) {
  const QUERY = `?q=${city}&units=metric`;
  const URI = URI_BASE + QUERY;
  const res = await axios.get(URI);
  return res.data;
}

export async function getWeatherByGeo(lat, lon) {
  const QUERY = `?lat=${lat}&lon=${lon}&units=metric`;
  const URI = URI_BASE + QUERY;
  const res = await axios.get(URI);
  return res.data;
}

export function getIconName(iconCode) {
  // https://openweathermap.org/weather-conditions
  const codeMap = {
    '01d': 'SunIcon',
    '01n': 'CircleIcon',
    '02d': 'CloudIcon',
    '02n': 'CloudIcon',
    '03d': 'CloudIcon',
    '03n': 'CloudIcon',
    '04d': 'CloudIcon',
    '04n': 'CloudIcon',
    '09d': 'CloudDrizzleIcon',
    '09n': 'CloudDrizzleIcon',
    '10d': 'CloudRainIcon',
    '10n': 'CloudRainIcon',
    '11d': 'CloudLightningIcon',
    '11n': 'CloudLightningIcon',
    '13d': 'CloudSnowIcon',
    '13n': 'CloudSnowIcon',
    '50d': 'AlignCenterIcon',
    '50n': 'AlignCenterIcon',
  }
  return codeMap[iconCode];
}