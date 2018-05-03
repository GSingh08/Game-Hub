import React, { Component } from "react";
import GamesList from "../GamesList";
import GamesListDetail from "../GamesListDetail";
import NavBar from "../NavBar";
import "./style.css";

class Homepage extends Component {
  render() {
    return (
      <div className="background">
        <h1>Hello, Welcome to Game-Hub</h1>
      </div>
    );
  }
}

export default Homepage;
