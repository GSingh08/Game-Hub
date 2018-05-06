import React, { Component } from "react";
import api from "../api";
import GamesListDetail from "../GamesListDetail";
import fetchJsonp from "fetch-jsonp";
import { Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";
import Footer from "../Footer";

class GamesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesList: null,
      gamesDataLoaded: false
    };
  }

  componentDidMount() {
    fetchJsonp(
      "https://www.giantbomb.com/api/games/?api_key=e41f4f79f7cb03c245793f9e1157fb759d5401eb&format=jsonp&sort=field:asc&limit=300",
      { jsonpCallback: "json_callback", timeout: 10000 }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          gamesList: data.results,
          gamesDataLoaded: true
        });
      })
      .catch(err => console.log(err));
  }

  renderGames() {
    return this.state.gamesList.map(game => (
      <div className="list-name">
        <Link to={`/games/${game.id}`}>
          <img className="list-image" src={game.image.small_url} />
        </Link>
      </div>
    ));
  }

  render() {
    return (
      <div className="background-color">
        <h1 className="game-title">Games</h1>
        <div className="list">
          <div>
            {this.state.gamesDataLoaded ? (
              this.renderGames()
            ) : (
              <div className="loading" />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default GamesList;
