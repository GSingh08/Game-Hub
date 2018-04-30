import React, { Component } from "react";
import api from "../api";

class GamesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    api.getGames().then(games => {
      this.setState({
        games: games
      });
    });
  }

  render() {
    const jsxItems = this.state.games.map(game => {
      return <h1> {game.name}</h1>;
    });
    return <div> {jsxItems} </div>;
  }
}

export default GamesList;
