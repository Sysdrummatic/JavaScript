import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class DodawanieKontaktow extends Component {
  dodajKontakt = () => {
    let kontakt = {
      imie: document.querySelector("#imie").value,
      nazwisko: document.querySelector("#nazwisko").value,

      email: document.querySelector("#email").value,

      telefon: document.querySelector("#telefon").value,
    };

    let daneJSON = localStorage.getItem("KT");
    let dane;
    if (daneJSON == null) {
      dane = [];
    } else {
      dane = JSON.parse(daneJSON);
    }
    dane.push(kontakt);

    localStorage.setItem("KT", JSON.stringify(dane));
    window.location.href = "/";
  };

  anuluj = () => {
    window.location.href = "/";
  };

  render() {
    return (
      <div>
        <p>
          Imię:
          <br />
          <input type="text" name="imie" id="imie" />
        </p>
        <p>
          Nazwisko:
          <br />
          <input type="text" name="nazwisko" id="nazwisko" />
        </p>
        <p>
          Email:
          <br />
          <input type="text" name="email" id="email" />
        </p>
        <p>
          Telefon:
          <br />
          <input type="text" name="telefon" id="telefon" />
        </p>
        <p>
          <button onClick={this.dodajKontakt}>Zapisz nowe dane</button>
          <button onClick={this.anuluj}>Anuluj</button>
        </p>
      </div>
    );
  }
}

export default DodawanieKontaktow;
