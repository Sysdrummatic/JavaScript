import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DodawanieKontaktow from "./components/DodawanieKontaktow";
import ListaKontaktow from "./components/ListaKontaktow";
import EdycjaKomponentu from "./components/EdycjaKomponentu";
import UsunKontakt from "./components/UsunKontakt";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Książka Telefoniczna</h1>

        <ul>
          <li>
            <a href="/">Lista kontaktow</a>
          </li>
          <li>
            <a href="/dodaj">Dodaj nowy kontakt</a>
          </li>
        </ul>

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ListaKontaktow} />
            <Route path="/dodaj" component={DodawanieKontaktow} />
            <Route path="/edytuj/:id" component={EdycjaKomponentu} />
            <Route path="/usun/:id" component={UsunKontakt} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
