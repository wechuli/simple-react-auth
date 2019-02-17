import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleFormSubmit = () => {};
  handleInputChange = () => {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <form onSubmit={this.handleFormSubmit}>
            <h2 className="subtitle">Login Below</h2>
            <label htmlFor="email" className="label">
              Email
              <div className="control">
              <input type="text" className="input"/>
              </div>
            </label>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
