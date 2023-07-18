import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class UsunKontakt extends Component {
  state = {
    dane: JSON.parse(localStorage.getItem("KT")),
    id: this.props.match.params.id,
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
        <h3>Kontakt zostanie usunięty:</h3>
        <p>Imię: {this.state.dane[this.state.id].imie}</p>
        <p>Nazwisko: {this.state.dane[this.state.id].nazwisko}</p>
        <p>Email: {this.state.dane[this.state.id].email}</p>
        <p>Telefon: {this.state.dane[this.state.id].telefon}</p>
        <p>
          <button onClick={this.usun}>Usuń kontakt</button>
          <button onClick={this.anuluj}>Żartowałem!</button>
        </p>
      </div>
    );
  }
}

export default UsunKontakt;
