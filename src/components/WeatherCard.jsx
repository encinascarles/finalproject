import React from 'react';

export default function WeatherCard({weatherData}){
  return (
    <div>
      <h1>{weatherData.name}</h1>
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