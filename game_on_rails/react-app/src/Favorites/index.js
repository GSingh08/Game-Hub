import React, { Component } from "react";
import Auth from "../modules/Auth";

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
        console.log(res);
        this.setState({
          favoritesList: res.favorites,
          favoritesDataLoaded: true
        });
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  // deleteFavorite(id) {
  //   //make request to delete endpoint
  //   //update data to represent that favorite is deleted.
  //
  // }

  deleteFavorite(favorite_id) {
    console.log(favorite_id);
    fetch(`/favorites/${favorite_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${Auth.getToken()}`,
        token: `${Auth.getToken()}`
      }
    });
  }

  // componentDidUpdate() {
  //   this.deleteFavorite();
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const prevfavoritesList = prevState.favoritesList;
    const newfavoritesList = this.state.favoritesList;
    if (prevfavoritesList !== newfavoritesList) {
      this.fetchData();
    }
  }

  renderFavorites() {
    return this.state.favoritesList.map(favorite => {
      return (
        <div key={favorite.id}>
          <h2>{favorite.name}</h2>
          <img src={favorite.image} />
          <button
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
