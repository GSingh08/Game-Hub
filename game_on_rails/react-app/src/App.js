import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Homepage";
import GamesList from "./GamesList";
import GamesListDetail from "./GamesListDetail";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route path="/" exact component={Homepage} />
          <Route path="/games" component={GamesList} />
          <Route path="/games/:id" exact component={GamesListDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
