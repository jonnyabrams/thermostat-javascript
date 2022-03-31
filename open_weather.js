// https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=2afffe20416d4048fb73463fb7972c75
import got from 'got';
const apiKey = '2afffe20416d4048fb73463fb7972c75'; // paste your API key here
const city = 'London';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

got(apiUrl).then((response) => {
  weatherData = JSON.parse(response.body);
  console.log(weatherData);
});

console.log('Requesting weather data');

// console.log(main.temp);

// console.log(weather[0].main);