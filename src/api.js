export const searchWeather = async (query) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${import.meta.env.PUBLIC_API_KEY}`
    );
    const weather = await response.json();
    console.log(import.meta.env.PUBLIC_API_KEY);
    return weather;
};


export const LondonWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${import.meta.env.PUBLIC_API_KEY}`
    );
    const weather = await response.json();
    return weather.weather[0].description;
  };


  