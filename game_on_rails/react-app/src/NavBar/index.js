import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";
import Homepage from "../Homepage";
import GamesList from "../GamesList";
import GamesListDetail from "../GamesListDetail";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

class NavBar extends Component {
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
            <a className="nav-anchor" href="/dashboard">
              Home
            </a>
          </li>
          <li className="nav-title">
            <a className="nav-anchor" href="http://localhost.com/">
              Game-Hub
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
