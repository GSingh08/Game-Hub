import React, { Component } from "react";
import "./style.css";
import Footer from "../Footer";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
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
      <div className="form-1">
        <h5 className="login-title">
          Please Enter Your Username and Password.
        </h5>

        <form onSubmit={e => this.props.handleLoginSubmit(e, this.state)}>
          <input
            className="username"
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
          />

          <input
            className="password"
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input className="login" type="submit" value="Login!" />
        </form>
        <Footer />
      </div>
    );
  }
}

export default LoginForm;
