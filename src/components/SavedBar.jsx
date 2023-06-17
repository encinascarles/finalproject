import "./SavedBar.css";
import { state_saved } from "../state";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { searchWeather } from "../api";
import { state } from "../state";

function SavedCity({ city }) {
  const [weatherData, setWeatherData] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await searchWeather(city);
      setWeatherData([
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        Math.round(data.main.temp - 273.15),
      ]);
    };
    fetchWeatherData();

    // Update every minute
    const interval = setInterval(fetchWeatherData, 60000);
    return () => clearInterval(interval);
  }, [city]);
  
  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!search) return;
      const data = await searchWeather(search);
      state.setWeather(data);
    };
    fetchWeatherData();
  }, [search]);
  

  return (
    <div className="saved-city">
      <h2>{city}</h2>
      <img src={weatherData[0]} />
      <h4>Temp: {weatherData[1]} °C</h4>
      <button onClick={() => state_saved.rmSaved(city)}>Delete</button>
      <button
        onClick={() => {
          setSearch(city);
        }}>Search
      </button>

      {/*<h4>Temp: {Math.round(weatherData.main.temp-273.15)} °C</h4>*/}
    </div>
  );
}

function SavedBar() {
  const savedCities = state_saved.getSaved();
  //const savedCities = ["London", "Paris", "New York"];
  return (
    <div className="saved-bar">
      <h1>Saved Cities</h1>
      {savedCities.map((city) => (
        <SavedCity
          city={city}
          key={"savebarcomponent_" + savedCities.indexOf(city)}
        />
      ))}
    </div>
  );
}

export default observer(SavedBar);
