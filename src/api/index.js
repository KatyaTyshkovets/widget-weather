import axios from 'axios';

const API_KEY = 'd08ef78370b9d910f7e25b3b92e12b05';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export function getWeatherData(city) {
  return axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
}
