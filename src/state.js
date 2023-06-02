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

class SavedList {
  constructor() {
    this.saved = [];
    makeAutoObservable(this);
  }

  setSaved(saved) {
    this.saved.push(saved);
  }

  getSaved() {
    return this.saved;
  }
}

export const state = new WeatherResults();
export const state_saved = new SavedList();
