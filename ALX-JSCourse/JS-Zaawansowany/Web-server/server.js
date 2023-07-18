const express = require("express"); // import modulu express
const hbs = require("hbs"); // import modulu hbs
let app = express(); // tworzenie aplikacji express
const fs = require("fs"); // import modulu fs

app.use((req, res, next) => {
  let now = new Date().toString();
  let log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile("server.log", log + " \n", (err) => {
    if (err) {
      console.log("Unable to append to server.log");
    }
  });
  next();
}); // ustawienie middleware (funkcja wywolywana przy kazdym zapytaniu do serwera)

app.use((req, res, next) => {
  res.render("underConstruction.hbs");
});

app.use(express.static(__dirname + "/public")); // __dirname - zwraca sciezke do folderu w ktorym znajduje sie plik

app.get("/", (req, res) => {
  res.send("<h1>Hello Word</h1>");
});

app.get("/person", (req, res) => {
  res.render("person.hbs", {
    pageTitle: "Person Page",
    message: "Welcome to my website",
  });
});

app.get("/about", (req, res) => {
  res.send({
    name: "Andrew",
    likes: ["Biking", "Cities"],
  });
});

app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "Unable to handle request",
  });
});

app.set("view engine", "hbs"); // ustawienie silnika szablonow
hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
}); // zarejestrowanie helpera do szablonow hbs (w tym przypadku zwraca aktualny rok) // ustawienie folderu z szablonami / Do zastosowania wszędzie na stronie.
hbs.registerHelper("screamIt", (text) => {
  return text.toUpperCase();
}); // zarejestrowanie helpera do szablonow hbs (w tym przypadku zwraca tekst w duzych literach)
hbs.registerPartials(__dirname + "/views/partials"); // ustawienie folderu z szablonami

app.listen(3000, () => {
  console.log("Serwer został pomyslnie uruchomiony na porcie 127.0.0.1:8080");
});
