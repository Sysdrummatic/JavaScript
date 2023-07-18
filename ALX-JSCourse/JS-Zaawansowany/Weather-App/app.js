const getWeather = require("./getWeather");
const yargs = require("yargs");

const argv = yargs
  .command("city [city]", "Sprawdź pogodę w mieście.")
  .option("t", {
    alias: "temperature",
    description: "Wyświetl temperaturę w stopniach Celsjusza.",
    type: "boolean",
  })
  .help().argv;

let command = argv._[0];

if (command === "city") {
  const city = argv.city;
  console.log("Sprawdzam pogodę w mieście: " + city);
  getWeather.getWeather(city, argv.temperature);
} else {
  console.log("Nie rozpoznana komenda!");
}
