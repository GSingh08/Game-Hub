import React, { Component } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import fetchJsonp from "fetch-jsonp";

class GamesListDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleGameData: null,
      singleGameDataLoaded: false
    };
  }

  fetchGame() {
    fetchJsonp(
      `https://www.giantbomb.com/api/game/${
        this.props.match.params.id
      }/?api_key=e41f4f79f7cb03c245793f9e1157fb759d5401eb&format=jsonp&sort=field:asc&limit=300`,
      { jsonpCallback: "json_callback", timeout: 10000 }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          singleGameData: data.results,
          singleGameDataLoaded: true
        });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.fetchGame();
  }

  componentDidUpdate() {
    if (this.props.match.params.id != this.state.singleGameData.id) {
      return this.fetchGame();
    }
  }

  parseData(string) {
    // Create a function that accepts a string of html and parses through and outputs the content of the first paragraph of the string.
  }

  renderGame() {
    // return this.state.singleGameData.map(data => <p>{data.name}</p>);
    return (
      <div className="detail">
        <h1>{this.state.singleGameData.name}</h1>
        <img
          className="detail-image"
          src={this.state.singleGameData.image.small_url}
        />
        <div
          className="detail-description"
          dangerouslySetInnerHTML={{
            __html: this.state.singleGameData.description
          }}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="detail">
        {this.state.singleGameDataLoaded ? (
          this.renderGame()
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  }
}

export default GamesListDetail;
