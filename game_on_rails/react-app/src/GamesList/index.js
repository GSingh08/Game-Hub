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
    fetchJsonp(
      "https://www.giantbomb.com/api/games/?api_key=e41f4f79f7cb03c245793f9e1157fb759d5401eb&format=jsonp"
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

  // fetchJsonp('/users.jsonp')
  // .then(function(response) {
  //   return response.json()
  // }).then(function(json) {
  //   console.log('parsed json', json)
  // }).catch(function(ex) {
  //   console.log('parsing failed', ex)
  // })

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
