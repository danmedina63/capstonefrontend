import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/app";
import Navbar from "./components/navBar";
import AddLash from "./components/add-lashes";

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/add-lashes">
          <AddLash />
        </Route>
      </Switch>
    </BrowserRouter>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
