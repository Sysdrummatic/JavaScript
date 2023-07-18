document.addEventListener("DOMContentLoaded", function () {
  wyswietl();
  document.querySelector("button").onclick = function () {
    zapisz();
  };
});

class Kontakt {
  constructor(imie, nazwisko, telefon) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.telefon = telefon;
  }
}

usun = (index) => {
  //   alert("no usuń to!");
  let daneJSON = localStorage.getItem("KT");
  let dane = JSON.parse(daneJSON);
  //   for (x in dane) {
  //     if (x == index) {
  dane.splice(index, 1);
  //     }
  //   }
  daneJSON = JSON.stringify(dane);
  localStorage.setItem("KT", daneJSON);
  wyswietl();
};

zapisz = () => {
  let imie = document.querySelector("#imie").value;
  let nazwisko = document.querySelector("#nazwisko").value;
  let telefon = document.querySelector("#telefon").value;

  let daneJSON = localStorage.getItem("KT");

  let dane;
  if (daneJSON == null) {
    dane = [];
  } else {
    dane = JSON.parse(daneJSON);
  }

  //   let dane = [];
  let kontakt = new Kontakt(imie, nazwisko, telefon);
  dane.push(kontakt);

  daneJSON = JSON.stringify(dane);
  localStorage.setItem("KT", daneJSON);

  wyswietl();
};

wyswietl = () => {
  let daneJSON = localStorage.getItem("KT");

  let html;

  if (daneJSON == null || daneJSON == "[]") {
    html = "<h3> Brak Danych </h3>";
  } else {
    let dane = JSON.parse(daneJSON);

    html = "<ul>";

    for (let x in dane) {
      html += `<li>`;
      html += `${dane[x].imie} ${dane[x].nazwisko} ${dane[x].telefon} `;
      html += `<b onclick='usun(${x})'>usun </b>`;
      html += `</li>`;
    }

    html += `</ul>`;
  }
  document.querySelector("div#showUser").innerHTML = html;
};
