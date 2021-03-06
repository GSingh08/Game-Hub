import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Switch,
  Route
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Homepage";
import GamesList from "./GamesList";
import GamesListDetail from "./GamesListDetail";
import NavBar from "./NavBar";
import Auth from "./modules/Auth";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";
import Favorites from "./Favorites";
import Footer from "./Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: Auth.isUserAuthenticated(),
      shouldGoToDash: false
    };
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }
  handleRegisterSubmit(e, data) {
    e.preventDefault();
    console.log("data", data);
    fetch("/users", {
      method: "POST",
      body: JSON.stringify({
        user: data
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())

      .then(res => {
        console.log(res);
        Auth.authenticateToken(res.token);

        this.setState({
          auth: Auth.isUserAuthenticated(),
          shouldGoToDash: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleLoginSubmit(e, data) {
    e.preventDefault();
    fetch("login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.errors) {
          console.log("wut happened");
          return;
        }
        Auth.authenticateToken(res.token);

        this.setState({
          auth: Auth.isUserAuthenticated(),
          shouldGoToDash: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // handleRegisterSubmit(e, data) {
  //   e.preventDefault();
  //   console.log(data);
  // }

  render() {
    return (
      <Router>
        <div>
          <NavBar />

          <Route path="/" exact component={Homepage} />
          <Route path="/games" component={GamesList} />
          <Route path="/games/:id" exact component={GamesListDetail} />
          <Route exact path="/favorites" render={() => <Favorites />} />
          <Route
            exact
            path="/register"
            render={() =>
              this.state.auth ? (
                <Redirect to="/games" />
              ) : (
                <RegisterForm
                  handleRegisterSubmit={this.handleRegisterSubmit}
                />
              )
            }
          />
          <Route
            exact
            path="/login"
            render={() =>
              this.state.auth ? (
                <Redirect to="/games" />
              ) : (
                <LoginForm handleLoginSubmit={this.handleLoginSubmit} />
              )
            }
          />
          <Route exact path="/dashboard" render={() => <Dashboard />} />
        </div>
      </Router>
    );
  }
}

export default App;
