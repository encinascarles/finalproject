const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7227a149f860d4872de01cdafdb14e0e`
);
const weather = await response.json();

console.log(weather);

