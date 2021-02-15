import axios from 'axios';

const URI_BASE = `https://runkit.io/g13g/602547055dd629001a1c9b43/branches/master`;

export async function getWeatherByCityName(city) {
  const QUERY = `?q=${city}&units=metric`;
  const URI = URI_BASE + QUERY;
  console.log(URI);
  const res = await axios.get(URI);
  return res.data;
}

export async function getWeatherByGeo(lat, lon) {
  const QUERY = `?lat=${lat}&lon=${lon}&units=metric`;
  const URI = URI_BASE + QUERY;
  const res = await axios.get(URI);
  return res.data;
}
