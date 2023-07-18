const fs = require("fs");
const calculations = require("./calculations");
const yargs = require("yargs");

//Skróty komend

const num1Opt = {
  describe: "Pierwsza liczba",
  demand: true,
  alias: "n1",
  type: "number",
};
const num2Opt = {
  describe: "Druga liczba",
  demand: true,
  alias: "n2",
  type: "number",
};
const wipeOut = {
  describe: "Usuń wszystkie zapisane obliczenia",
  alias: "c",
  type: "boolean",
};

//Komendy
const argv = yargs
  .command("add", "Dodawanie", {
    num1: num1Opt,
    num2: num2Opt,
  })
  .command("sub", "Odejmowanie", {
    num1: num1Opt,
    num2: num2Opt,
  })
  .command("multiply", "Mnożenie", {
    num1: num1Opt,
    num2: num2Opt,
  })
  .command("div", "Dzielenie", {
    num1: num1Opt,
    num2: num2Opt,
  })
  .command("history", "Historia działań", { clear: wipeOut })
  .help().argv;

let command = process.argv[2];

if (command === "add") {
  let calculation = calculations.addition(argv.num1, argv.num2);
  if (calculation) {
    console.log("Wykonano obliczenia!");
  }
} else if (command === "sub") {
  let calculation = calculations.subtraction(argv.num1, argv.num2);
  if (calculation) {
    console.log("Wykonano obliczenia!");
  }
} else if (command === "multiply") {
  let calculation = calculations.multiplication(argv.num1, argv.num2);
  if (calculation) {
    console.log("Wykonano obliczenia!");
  }
} else if (command === "div") {
  let calculation = calculations.division(argv.num1, argv.num2);
  if (calculation) {
    console.log("Wykonano obliczenia!");
  }
} else if (command === "history") {
  if (argv.clear) {
    calculations.removeAllCalculations();
  } else {
    let allCalculations = calculations.getAll();
    console.log(`Wyświetlannie ${allCalculations.length} obliczeń z historii.`);
    allCalculations.forEach((calculation) =>
      calculations.logCalculation(calculation)
    );
  }
} else {
  console.log("Nie rozpoznana komenda!");
}
