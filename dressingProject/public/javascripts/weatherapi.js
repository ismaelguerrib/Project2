var weatherBox = document.getElementById("weather-box");

///// Fonctions Generique ////

function fromKtoC(k) {
  return parseInt(k - 273.15);
}

function getWeather() {
  axios
    .get(
      "http://api.openweathermap.org/data/2.5/weather?id=6455259&appid=c2e55112c6c0f6ad92cb23e454a5f0c5"
    )
    .then(apiRes => {
      console.log(apiRes);
      const weatherDescription = apiRes.data.weather[0].description;
      const temperature = fromKtoC(apiRes.data.main.temp);
      weatherBox.insertAdjacentHTML(
        "beforeend",
        `<p>${weatherDescription}</p><p>${temperature}</p>`
      );
    })
    .catch(err => console.log(err));
}

if (weatherBox) {
  getWeather();
}
