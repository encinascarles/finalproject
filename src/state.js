import { makeAutoObservable } from "mobx";

class WeatherResults {
  constructor() {
    this.weather = null;
    makeAutoObservable(this);
  }

  setWeather(weather) {
    this.weather = weather;
  }

  getWeather() {
    return this.weather;
  }
}

export const state = new WeatherResults();
