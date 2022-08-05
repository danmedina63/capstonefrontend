import React, { Component } from "react";
import axios from "axios";
import Lash from "./lashes";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      lash: [],
    };
  }

  componentDidMount() {

    axios
      .get("http://127.0.0.1:5000/products")
      .then((response) => {
        console.log(response);
        this.setState({ lash: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderLash() {
  
    return this.state.lash.map((lash) => {
      return <Lash key={lash.id} lashData={lash} />;
    });
  }

  render() {
    return (
      
        <div className="app">
          
          <h1>My Work</h1>
          <div className="values">
            {this.renderLash()}
          </div>
        
        </div>
    
    );
  }
}
