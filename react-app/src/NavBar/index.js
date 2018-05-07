import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";
import Homepage from "../Homepage";
import GamesList from "../GamesList";
import GamesListDetail from "../GamesListDetail";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import Auth from "../modules/Auth";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      auth: Auth.isUserAuthenticated()
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    fetch("/logout", {
      method: "DELETE",
      headers: {
        token: Auth.getToken(),
        Authorization: `Token ${Auth.getToken()}`
      }
    })
      .then(res => {
        Auth.deauthenticateUser();
        this.setState({
          auth: Auth.isUserAuthenticated()
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-anchor" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-anchor" onClick={this.handleLogout} href="/">
              Logout
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-anchor" href="/register">
              Register
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-anchor" href="/games">
              Games
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-anchor" href="/favorites">
              Favorites
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-anchor" href="/">
              Home
            </a>
          </li>
          <li className="nav-title">
            <a className="nav-anchor" href="/">
              Game-Hub
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
