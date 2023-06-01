import React, { useEffect, useState , useRef } from "react";
import { LondonWeather, searchWeather } from "../api";

function WeatherCard({weatherData}){
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

export default function WeatherSearch() {
  const [weatherData, setWeatherData] = useState(null);
  const [search, setSearch] = useState("");
  const searchRef = useRef();

  const doSearch = (event) => {
    event.preventDefault();
    setSearch(searchRef.current.value);
    searchRef.current.value = "";
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!search) return;
      const data = await searchWeather(search);
      setWeatherData(data);
    };
    fetchWeatherData();
  }, [search]);

  console.log(weatherData);
  //if (!weatherData) return (<h2>carregant...</h2>);
  return (
    <div>
      <form onSubmit={doSearch}>
        <input type="text" ref={searchRef} />
        <button>Search</button>
      </form>
      {weatherData ? <WeatherCard weatherData={weatherData}/> : <h2>carregant...</h2>}
    </div>
  );
  
}

