import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/app";
import Lashes from "./components/lashes";
import Navbar from "./components/navBar";
import Login from "./components/login";
import Contact from "./components/contact";

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/lashes">
          <Lashes />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
