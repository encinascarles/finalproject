import React from "react";
import WeatherCard from "./WeatherCard";
import { state } from "../state";
import { observer } from "mobx-react-lite";

function WeatherResults() {
  const weatherData = state.getWeather();

  return (
    <>
      {weatherData &&
        (weatherData.weather ? (
          <WeatherCard weatherData={weatherData} />
        ) : (
           <h2>Not Found!</h2>
        ))}
    </>
  );
}

export default observer(WeatherResults);
