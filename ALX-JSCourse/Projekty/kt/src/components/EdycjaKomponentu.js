import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class EdycjaKomponentu extends Component {
  state = {
    dane: JSON.parse(localStorage.getItem("KT")),
    id: this.props.match.params.id,
  };

  edytujKontakt = () => {
    this.state.dane[this.state.id].imie = document.querySelector("#imie").value;
    this.state.dane[this.state.id].nazwisko =
      document.querySelector("#nazwisko").value;
    this.state.dane[this.state.id].email =
      document.querySelector("#email").value;
    this.state.dane[this.state.id].telefon =
      document.querySelector("#telefon").value;

    localStorage.setItem("KT", JSON.stringify(this.state.dane));
    window.location.href = "/";
  };

  usun = () => {
    this.state.dane.splice(this.state.index, 1);
    localStorage.setItem("KT", JSON.stringify(this.state.dane));
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
          <input
            type="text"
            name="imie"
            id="imie"
            defaultValue={this.state.dane[this.state.id].imie}
          />
        </p>
        <p>
          Nazwisko:
          <br />
          <input
            type="text"
            name="nazwisko"
            id="nazwisko"
            defaultValue={this.state.dane[this.state.id].nazwisko}
          />
        </p>
        <p>
          Email:
          <br />
          <input
            type="text"
            name="email"
            id="email"
            defaultValue={this.state.dane[this.state.id].email}
          />
        </p>
        <p>
          Telefon:
          <br />
          <input
            type="text"
            name="telefon"
            id="telefon"
            defaultValue={this.state.dane[this.state.id].telefon}
          />
        </p>
        <p>
          <button onClick={this.edytujKontakt}>Zmień dane</button>
          <button onClick={this.anuluj}>Anuluj</button>
        </p>
      </div>
    );
  }
}

export default EdycjaKomponentu;
