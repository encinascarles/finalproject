import React from 'react';
import { useEffect, useState } from "react";
import "./WeatherCard.css"
import {searchImage} from "../imageapi"
import { state_saved } from '../state';

export default function WeatherCard({weatherData}){
  const [imagesrc, setImagesrc] = useState("");
  useEffect(() => {
    const fetchImage = async () => {
      const imagesrcc = await searchImage(weatherData.name);
      setImagesrc(imagesrcc);
    };
    fetchImage();
  }, [weatherData]);

  
  return (
    <div className="weather-card">
      <h1>{weatherData.name}</h1>
      <button onClick={() => state_saved.setSaved(weatherData.name)}>Save</button>
      <h3>There is {weatherData.weather[0].description} in {weatherData.name}</h3>
      <div className="content">
        {imagesrc &&  <img src={imagesrc}/>}
        <div className="actual-weather">
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/>
          <h2>{weatherData.weather[0].main}</h2>
        </div>
        <div className="temperature">
          <h2>Temperature:</h2>
          <h4>Temp: {Math.round(weatherData.main.temp-273.15)} °C</h4>
          <h4>Min: {Math.round(weatherData.main.temp_min-273.15)} °C</h4>
          <h4>Max: {Math.round(weatherData.main.temp_max-273.15)} °C</h4>
          <h4>Sensation: {Math.round(weatherData.main.feels_like-273.15)} °C</h4>
        </div>
      </div>
    </div>
  );
}