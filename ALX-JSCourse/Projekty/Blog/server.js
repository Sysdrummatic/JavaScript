// STAŁA KONFIGURACJA SERWERA.

//wprowadzamy informacje nt. modulow ktore beda wykorzystywane w tym pliku
let express = require("express");
let bodydParser = require("body-parser");
let fs = require("fs");

//tworzenie swrowiska aplikacji
let app = express();

//definicja mechanizmow wykorzystywanych przez app
app.use(bodydParser.json());
app.use(bodydParser.urlencoded({ extended: true }));

//uruchomienie silnika szablonow EJS
app.set("view engine", "ejs");

app.listen(8080);
console.log("Serwer został pomyslnie uruchomiony na porcie 127.0.0.1:8080");

// ZMIENNA KONFIGURACJA W ZALEŻNOŚCI OD PROJEKTU.

zapisz = (dane) => {
  fs.writeFile("blog.json", JSON.stringify(dane), "utf8", function (err) {
    if (err == true) {
      console.log("Blad dodawania");
    } else {
      console.log("Pomyslnie dodano");
    }
  });
};

odczyt = () => {
  let dane;

  try {
    let daneJSON = fs.readFileSync("blog.json");
    dane = JSON.parse(daneJSON);
  } catch (err) {
    dane = [];
  }

  return dane;
};

app.get("/", function (req, res) {
  res.render("index", { wpisy: odczyt() });
});

app.get("/dodaj", function (req, res) {
  res.render("dodaj");
});

app.post("/dodaj", function (req, res) {
  obj = {
    tytul: req.body["tytul"], //Pobranie wartości z formularza
    tresc: req.body["tresc"],
  };

  let tab = odczyt();
  tab.push(obj);
  zapisz(tab);

  res.redirect("/");
});

app.get("/edytuj/:id", function (req, res) {
  let index = req.params.id;
  let tab = odczyt();

  res.render("edytuj", { wpis: tab[index], id: index });
});

app.post("/edytuj/:id", function (req, res) {
  let index = req.params.id;
  let tab = odczyt();

  (tab[index].tytul = req.body["tytul"]),
    (tab[index].tresc = req.body["tresc"]),
    zapisz(tab);

  res.redirect("/");
});

app.get("/usun/:id", function (req, res) {
  let index = req.params.id;
  let tab = odczyt();

  tab.splice(index, 1);
  zapisz(tab);
  res.redirect("/");
});
