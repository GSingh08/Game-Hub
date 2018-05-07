import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>Created By: Gurjot Singh</p>
        <p>Contact Me : gurjotssingh11@gmail.com</p>
      </footer>
    );
  }
}

export default Footer;
