import React, { Component } from "react";
import Auth from "../modules/Auth";

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favoritesList: null,
      favoritesDataLoaded: false
    };
  }
  componentDidMount() {
    fetch("/favorites", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${Auth.getToken()}`,
        token: `${Auth.getToken()}`
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          favoritesList: res.favorites,
          favoritesDataLoaded: true
        });
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  renderFavorites() {
    return this.state.favoritesList.map(favorite => {
      return (
        <div key={favorite.id}>
          <h2>{favorite.name}</h2>
          <img src={favorite.image} />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.state.favoritesDataLoaded ? (
          this.renderFavorites()
        ) : (
          <p>Loading..</p>
        )}
      </div>
    );
  }
}

export default Favorites;
