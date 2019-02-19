import React, { Component } from "react";
import axios from "axios";

class Login2 extends Component {
  state = {
    email: "",
    password: "",
    error:''
  };
  handleFormSubmit = e => {
    e.preventDefault();

    // axios
    //   .post("http://127.0.0.1:8090/api/v1/signin", this.state)
    //   .then(response => console.log(response))
    //   .catch(error => console.log(error));


      fetch('http://127.0.0.1:8090/api/v1/signin', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      }).then(res => {
        console.log(res.headers.get('set-cookie')); // undefined
        console.log(document.cookie); // nope
        return res.json();
      }).then(json => {
        if (json.success) {
          this.setState({ error: '' });
        //   this.context.router.push(json.redirect);
        }
        else {
          this.setState({ error: json.error });
        }
      });

    // fetch("http://127.0.0.1:8090/api/v1/signin", {
    //   method: "POST",
    //   body: JSON.stringify(this.state),
    //   credentials: "same-origin",
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then(res => {
    //     if (res.status === 200) {
    //       console.log(res);
    //       this.props.history.push("/");
    //     } else {
    //       const error = new Error(res.error);
    //       throw Error;
    //     }
    //   })
    //   .catch(err => {
    //     console.error(err);
    //     alert("Error logging in please try again");
    //   });
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

export default Login2;
