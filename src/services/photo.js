import axios from 'axios';

const URI_BASE = 'https://untitled-ihuuousf3gce.runkit.sh/'; //'https://runkit.io/g13g/602ad5459396ab001ac7b07e/branches/master';

export async function queryPhoto(keyword) {
  const QUERY = `?query=${keyword}&orientation=portrait`;
  const URI = URI_BASE + QUERY;
  const res = await axios.get(URI);
  return res.data.urls.regular;
}

export function getWeatherInformedKeyword(iconCode, temperature) {
  console.log(iconCode);
  console.log(temperature);
  // TODO: Implement some rules...
  return 'winter';
}