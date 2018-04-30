import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Homepage";
import GamesList from "./GamesList";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Homepage} />
          <Route path="/games" exact component={GamesList} />
        </div>
      </Router>
    );
  }
}

export default App;
