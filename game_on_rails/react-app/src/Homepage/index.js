import React, { Component } from "react";
import GamesList from "../GamesList";
import GamesListDetail from "../GamesListDetail";
import NavBar from "../NavBar";
import "./style.css";

class Homepage extends Component {
  scrollMethod() {
    document.documentElement.scrollTop = 800;
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
          <h3 className="title">Welcome To Game Hub</h3>
          <h3 className="title-1">
            Where you have every game at the tip of your fingers!
          </h3>
        </div>

        <div className="div-1">
          <h5 className="favorite-paragraph">
            Favorite all your favorites that<br /> you may want to potentially
            play in the future
          </h5>
        </div>

        <div className="div-2">
          <h5 className="favorite-paragraph">
            Read Through any new game you may find interesting <br />or an old
            game to relieve the nostalgia!
          </h5>
        </div>
      </div>
    );
  }
}

export default Homepage;
