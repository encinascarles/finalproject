export const searchWeather = async (query) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query},uk&APPID=7227a149f860d4872de01cdafdb14e0e`
    );
    const weather = await response.json();
    return weather;
};

export const LondonWeather = async () => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7227a149f860d4872de01cdafdb14e0e"
    );
    const weather = await response.json();
    console.log(weather.weather[0].description);
    return weather.weather[0].description;
  };


  