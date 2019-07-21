import cloudy from "../images/cloudy.svg";
import partlyCloudy from "../images/partlycloudy.svg";
import rain from "../images/rain.svg";
import snow from "../images/snow.svg";
import sunny from "../images/sunny.svg";
import downLoad from "../images/download.svg";
import API_KEY from "../apiKey";

const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?APPID=${ API_KEY }`;
//console.log(BASE_URL)

function isZipCode(location) {
    return !isNaN(parseInt(location));
}

function getWeatherIcon(conditionCode) {
    if (conditionCode === 800) {
        return sunny;
    }
    if (conditionCode >= 200 && conditionCode < 600) {
        return rain;
    }
    if (conditionCode >= 600 && conditionCode < 700) {
        return snow;
    }
    if (conditionCode >= 801 && conditionCode <= 803) {
        return partlyCloudy;
    }
    if (conditionCode === 804) {
        return cloudy;
    }
    return downLoad;
}

export function formatWeatherData(weatherData) {
    return {
        icon: getWeatherIcon(weatherData.weather[0].id),
        currentTemperature: weatherData.main.temp,
        location: weatherData.name,
        maxTemperature: weatherData.main.temp_max,
        minTemperature: weatherData.main.temp_min,
        humidity: weatherData.main.humidity,
        wind: weatherData.wind.speed
    };
}

export function buildURL(location) {
    if (isZipCode(location)) {
        return BASE_URL + `zip=${location}`;
    }
    return BASE_URL + `q=${location}`;
}
