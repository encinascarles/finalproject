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
    if (this.saved.indexOf(saved) < 0) {
      this.saved.push(saved);
    }
  }

  rmSaved(saved) {
    this.saved.splice(this.saved.indexOf(saved), 1);
  }

  getSaved() {
    return this.saved;
  }
}

export const state = new WeatherResults();
export const state_saved = new SavedList();
