import React, { Component } from "react";
import Auth from "../modules/Auth";
import "./style.css";

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favoritesList: null,
      favoritesDataLoaded: false
    };
    this.deleteFavorite = this.deleteFavorite.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("/favorites", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${Auth.getToken()}`,
        token: `${Auth.getToken()}`
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          favoritesList: res.favorites,
          favoritesDataLoaded: true
        });
      })
      .catch(err => console.log(err));
  }

  // deleteFavorite(id) {
  //   //make request to delete endpoint
  //   //update data to represent that favorite is deleted.
  //
  // }

  deleteFavorite(favorite_id) {
    fetch(`/favorites/${favorite_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${Auth.getToken()}`,
        token: `${Auth.getToken()}`
      }
    }).then(res => this.fetchData());
  }

  // componentDidUpdate() {
  //   this.deleteFavorite();
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   const prevfavoritesList = prevState.favoritesList;
  //   const newfavoritesList = this.state.favoritesList;
  //   if (prevfavoritesList == null || newfavoritesList == null) {
  //     return;
  //   }
  //   if (prevfavoritesList.length !== newfavoritesList.length) {
  //     this.fetchData();
  //   }
  // }

  renderFavorites() {
    return this.state.favoritesList.map(favorite => {
      return (
        <div className="favorite-main" key={favorite.id}>
          <h2 className="favorite-name">{favorite.name}</h2>
          <img className="favorite-image" src={favorite.image} />
          <button
            className="favorite-button"
            onClick={e => {
              this.deleteFavorite(favorite.id);
            }}
          >
            Delete
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="favorites">
        <h2 className="favorite-title">Favorites List</h2>
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
