import React, { Component } from "react";
import api from "../api";
import GamesListDetail from "../GamesListDetail";

class GamesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesList: null,
      gamesDataLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://www.giantbomb.com/api/games/?api_key=e41f4f79f7cb03c245793f9e1157fb759d5401eb&format=json"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          gamesList: data.results,
          gamesDataLoaded: true
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.gamesDataLoaded ? (
          <GamesListDetail gamesList={this.state.gamesList} />
        ) : (
          <p> Loading </p>
        )}
      </div>
    );
  }
}

export default GamesList;
