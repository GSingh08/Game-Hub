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
            <a className="nav-anchor" href="default.asp">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-anchor" href="news.asp">
              Games
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-anchor" href="contact.asp">
              Log In
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-anchor" href="about.asp">
              Sign Up
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
