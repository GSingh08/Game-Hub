import React, { Component } from "react";

const GamesListDetail = props => {
  return (
    <div>
      <h1>Games</h1>
      <div>
        {this.props.gamesList.map(game => {
          return <p>{game.name}</p>;
        })}
      </div>
    </div>
  );
};

export default GamesListDetail;
