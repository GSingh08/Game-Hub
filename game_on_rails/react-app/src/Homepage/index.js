import React, { Component } from "react";
import GamesList from "../GamesList";
import GamesListDetail from "../GamesListDetail";
import NavBar from "../NavBar";
import "./style.css";

class Homepage extends Component {
  scrollMethod() {
    document.documentElement.scrollTop = 300;
  }

  render() {
    return (
      <div>
        <div className="background-1">
          <button className="button" onClick={this.scrollMethod}>
            Learn More
          </button>
        </div>
        <div className="intro-text">
          <h3 className="title">
            Welcome To Game Hub, Where you have every game at the tip of your
            fingers!
          </h3>
        </div>
        <div className="description" />
      </div>
    );
  }
}

export default Homepage;
