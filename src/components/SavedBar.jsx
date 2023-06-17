import React, { useState } from "react";
import "./SavedBar.css";
import { state_saved } from "../state";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { searchWeather } from "../api";
import { state } from "../state";

function SavedCity({ city, expanded }) {
  const [weatherData, setWeatherData] = useState("");

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

  const doSearch = (event) => {
    const fetchWeatherData = async () => {
      const data = await searchWeather(city);
      state.setWeather(data);
    };
    fetchWeatherData();
    console.log("searching for " + city);
  };

  const doDelete = (event) => {
    state_saved.rmSaved(city);
    event.stopPropagation();
  };

  return (
    <div
      className={`saved-city ${expanded ? "expanded" : "collapsed"}`}
      onClick={() => {
        doSearch();
      }}
    >
      <div className="name-delete">
        <h2>{city}</h2>
        <button onClick={(event) => doDelete(event)}>&#128465;</button>
      </div>
      {expanded && (
        <>
          <img src={weatherData[0]} alt="Weather Icon" />
          <h4>Temp: {weatherData[1]} °C</h4>
        </>
      )}
    </div>
  );
}

function SavedBar() {
  const [expanded, setExpanded] = useState(false);
  const savedCities = state_saved.getSaved();

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`saved-bar ${expanded ? "expanded" : "collapsed"}`}>
      <h1>Saved Cities</h1>
      {savedCities.map((city) => (
        <SavedCity
          city={city}
          key={"savebarcomponent_" + savedCities.indexOf(city)}
          expanded={expanded}
        />
      ))}
      <button className="expand-button" onClick={toggleExpand}>
        {expanded ? "Collapse" : "Expand"}
      </button>
      <button
        className="add-button"
        onClick={() => state_saved.setSaved(state.getWeather().name)}
      >
        &#10133;
      </button>
    </div>
  );
}

export default observer(SavedBar);
