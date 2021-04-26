import React, { Component } from "react";
import "./index.scss";
import Login from "./Login";
import Register from "./Register";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromType: "Login",
    };
  }

  switchForm = (value) => {
    console.log(value);
    this.setState({
      fromType: value,
    });
  };

  render() {
    return (
      <div className="from-wrap">
        {this.state.fromType === "Login" ? (
          <Login switchForm={this.switchForm} />
        ) : (
          <Register switchForm={this.switchForm} />
        )}
      </div>
    );
  }
}

export default LoginPage;
