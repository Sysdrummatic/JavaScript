const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const port = 3000;

// Ustawienie silnika renderowania EJS
app.set("view engine", "ejs");

// Ustawienie folderu publicznego
app.use(express.static("public"));

// Ustawienie parsera do przetwarzania danych z formularzy
app.use(bodyParser.urlencoded({ extended: true }));

// Funkcja zwracająca losową liczbę z zadanego zakresu
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Strona główna
app.get("/", (req, res) => {
  // Wygenerowanie 10 losowych liczb z zakresu 1-100
  const numbers = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(getRandomNumber(1, 100));
  }

  // Przekazanie liczb do widoku
  res.render("index", { numbers: numbers });
});

// Obsługa formularza
app.post("/", (req, res) => {
  // Pobranie wyniku z formularza
  const result = parseInt(req.body.result);

  // Obliczenie sumy liczb wygenerowanych wcześniej
  const numbers = req.body.numbers.map(Number);
  const sum = numbers.reduce((a, b) => a + b, 0);

  // Sprawdzenie, czy wynik jest poprawny
  if (result === sum) {
    // Wygenerowanie informacji o sukcesie
    const successMessage = `Gratulacje, suma liczb to ${sum}!`;

    // Przekazanie informacji o sukcesie do widoku
    res.render("success", { message: successMessage });
  } else {
    // Wygenerowanie informacji o błędzie
    const errorMessage = "Nieprawidłowa suma, spróbuj jeszcze raz.";

    // Przekazanie informacji o błędzie i liczbach do widoku
    res.render("index", { errorMessage: errorMessage, numbers: numbers });
  }
});

// Start serwera
app.listen(port, () => {
  console.log(`Aplikacja działa na http://localhost:${port}`);
});
