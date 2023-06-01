import React, { useEffect, useState } from "react";
import { LondonWeather, searchWeather } from "../api";

export default function WeatherSearch() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await searchWeather("London");
      console.log(data);
      setWeatherData(data);
    };

    fetchWeatherData();
  }, []);
  if (!weatherData) return null;
  return (
    <div>
      <h2>{weatherData.weather[0].main}</h2>
      <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/>
      <h3>{weatherData.weather[0].description}</h3>
      <h3>Temperature:</h3>
      <h4>Temp: {Math.round(weatherData.main.temp-273.15)} °C</h4>
      <h4>Min: {Math.round(weatherData.main.temp_min-273.15)} °C</h4>
      <h4>Max: {Math.round(weatherData.main.temp_max-273.15)} °C</h4>
      <h4>Sensation: {Math.round(weatherData.main.feels_like-273.15)} °C</h4>
    </div>
  );
}

