const axios = require("axios");

let getWeather = (city, displayTemp) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=932e9946953aa6fbcc5b20db4e8051a0`;
  axios
    .get(url)
    .then((response) => {
      if (response.data.cod === "404") {
        throw new Error("unable to fetch weather");
      }
      if (displayTemp) {
        let cityTemp = (response.data.main.temp - 273).toFixed(2);
        console.log(
          `Aktualna temperatura w ${city} to ${cityTemp} stopni Celsjusza.`
        );
      } else {
        console.log(response.data);
      }
    })
    .catch((e) => {
      if (e.code === "ENOTFOUND") {
        console.log("Nie można połączyć się z serwerami API.");
      } else {
        console.log(e);
      }
    });
};

module.exports = {
  getWeather,
};
