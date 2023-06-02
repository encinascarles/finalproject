import React, { useEffect, useState , useRef } from "react";
import { LondonWeather, searchWeather } from "../api";
import WeatherCard from "./WeatherCard";
import { state } from "../state";



export default function WeatherSearch() {
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
      state.setWeather(data);
    };
    fetchWeatherData();
  }, [search]);

  return (
    <div>
      <form onSubmit={doSearch}>
        <input type="text" ref={searchRef} />
        <button>Search</button>
      </form>
      {/* {weatherData && (weatherData.weather ? <WeatherCard weatherData={weatherData}/> : search && <h2>"{search}" not Found!</h2>)} */}
    </div>
  );
  
}

