import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleFormSubmit = e => {
      e.preventDefault();
      alert('Auth coming soon');
  };
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <form onSubmit={this.handleFormSubmit}>
            <h2 className="subtitle">Login Below</h2>
            <label htmlFor="email" className="label">
              Email
              <div className="control">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  onChange={this.handleInputChange}
                  value={this.state.email}
                  className="input"
                  required
                />
              </div>
            </label>

            <label htmlFor="password" className="label">
              Password
              <div className="control">
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.handleInputChange}
                  value={this.state.password}
                  className="input"
                  required
                />
              </div>
            </label>
            <button className="button is-primary is-outlined">Log In</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
