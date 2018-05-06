import React, { Component } from "react";
import "./style.css";
import Footer from "../Footer";

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const name = e.target.name;
    const val = e.target.value;
    this.setState({
      [name]: val
    });
  }
  render() {
    return (
      <div className="form">
        <form onSubmit={e => this.props.handleRegisterSubmit(e, this.state)}>
          <input
            className="username-1"
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
          />

          <input
            className="password-1"
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <input
            className="email-1"
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <input
            className="name-1"
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input className="register-1" type="submit" value="Register!" />
        </form>
        <Footer />
      </div>
    );
  }
}

export default RegisterForm;
