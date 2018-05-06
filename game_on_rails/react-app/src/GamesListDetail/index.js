import React, { Component } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import fetchJsonp from "fetch-jsonp";
import Auth from "../modules/Auth";

// import "./style.css";

class GamesListDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleGameData: null,
      singleGameDataLoaded: false,
      auth: Auth.isUserAuthenticated()
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

  renderGame() {
    // return this.state.singleGameData.map(data => <p>{data.name}</p>);
    return (
      <div className="detail">
        <h1>{this.state.singleGameData.name}</h1>
        <img
          className="detail-image"
          src={this.state.singleGameData.image.small_url}
        />
        <button onClick={() => this.addToFavorites()}>Add To Favorites</button>
        <div
          className="detail-description"
          dangerouslySetInnerHTML={{
            __html: this.state.singleGameData.description
          }}
        />
      </div>
    );
  }

  addToFavorites() {
    fetch("/favorites", {
      method: "POST",
      body: JSON.stringify({
        favorite: {
          name: this.state.singleGameData.name,
          image: this.state.singleGameData.image.small_url
        }
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${Auth.getToken()}`,
        token: `${Auth.getToken()}`
      }
    })
      .then(res => res.json())

      .then(res => {
        console.log(res);
      })
      .catch(err => console.log("FETCH ERROR: " + err));
  }

  render() {
    return (
      <div className="detail">
        {this.state.singleGameDataLoaded ? (
          this.renderGame()
        ) : (
          <div className="loading-image" />
        )}
      </div>
    );
  }
}

export default GamesListDetail;
