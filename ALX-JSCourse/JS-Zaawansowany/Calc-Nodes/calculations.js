const fs = require("fs");

//Pobieranie zapisów z historii

let fetchCalculations = () => {
    try {
        let calculationsString = fs.readFileSync("historia.json");
        return JSON.parse(calculationsString);
    } catch (e) {
        return [];
    }
};

//Zapis wyników obliczń

let saveCalculations = (calculations) => {
    fs.writeFileSync("historia.json", JSON.stringify(calculations));
};

//Funkcje obliczń

let calculate = (mathOperator, result, num1, num2) => {
    let calculations = fetchCalculations();
    let calcDescription = `${mathOperator} ${num1} i ${num2} to ${result}.`;
    let calculation = {
        num1,
        num2,
        result,
        calcDescription,
    };
    calculations.push(calculation);
    saveCalculations(calculations);
    console.log("Dodano obliczenia do historii");
};

let addition = (num1, num2) => {
    const mathOperator = "Dodawanie";
    let result = num1 + num2;
    calculate(mathOperator, result, num1, num2);
};

let subtraction = (num1, num2) => {
    const mathOperator = "Odejmowanie";
    let result = num1 - num2;
    calculate(mathOperator, result, num1, num2);
};

let multiplication = (num1, num2) => {
    const mathOperator = "Mnożenie";
    let result = num1 * num2;
    calculate(mathOperator, result, num1, num2);
};

let division = (num1, num2) => {
    if (num2 === 0) {
        console.log(`Nie można dzielić przez ${num2}!`);
        return;
    } else {
        const mathOperator = "Dzielenie";
        let result = num1 / num2;
        calculate(mathOperator, result, num1, num2);
    }
};

let getAll = () => {
    console.log("Pobranie listy obliczeń...");
    return fetchCalculations();
};

let logCalculation = (calculation) => {
    console.log(calculation.calcDescription);
};

let removeAllCalculations = () => {
    try {
        fs.unlinkSync("historia.json");
        console.log("Usunięto wszystkie zapisane obliczenia.");
    } catch (e) {
        console.log("Wystąpił błąd podczas usuwania obliczeń:", e);
    }
};

let done = () => {
    let msg = "Wykonano obliczenia!";
    return msg;
};

//Export modułów

module.exports = {
    addition,
    subtraction,
    multiplication,
    division,
    getAll,
    logCalculation,
    removeAllCalculations,
    done,
};
