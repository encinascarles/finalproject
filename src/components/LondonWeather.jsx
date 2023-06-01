import React, { useEffect, useState } from "react";
import { LondonWeather } from "../api";

function WeatherSearch() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await LondonWeather();
      setWeatherData(data);
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
