import React, { useEffect, useState } from "react";
import { LondonWeather, searchWeather } from "../api";

function WeatherSearch() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await searchWeather("London");
      setWeatherData(data.weather[0].description);
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      {weatherData && <h2>{weatherData}</h2>}
    </div>
  );
}

export default WeatherSearch;
