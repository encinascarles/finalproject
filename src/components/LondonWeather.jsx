import React, { useEffect, useState } from "react";
import { LondonWeather, searchWeather } from "../api";

function WeatherSearch() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await searchWeather("London");
      console.log(data.weather[0]);
      setWeatherData(data.weather[0]);
    };

    fetchWeatherData();
  }, []);
  if (!weatherData) return null;
  return (
    <div>
      <h2>{weatherData.main}</h2>
      <h3>{weatherData.description}</h3>
      <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}/>
    </div>
  );
}

export default WeatherSearch;
