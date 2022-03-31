import got from 'got';

class WeatherAPI {

  fetchWeatherData(city, callback) {
    const apiKey = '2afffe20416d4048fb73463fb7972c75'; // paste your API key here
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    let weatherData = null;

    got(apiUrl).then((response) => {
      weatherData = JSON.parse(response.body);
      callback(weatherData);
    });
  }

}
const weather = new WeatherAPI;
weather.fetchWeatherData('Ankara', (weatherData) => {
console.log(weatherData)
});
