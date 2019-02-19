import React, { Component } from "react";
import Home from "./components/Home";
import { Link, Route, Switch } from "react-router-dom";
import Secret from "./components/Secret";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="columns">
            <div className="column">
              <Link to="/">Home</Link>
            </div>
            <div className="column">
              <Link to="/secret">Secret</Link>
            </div>
            <div className="column">
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path="/secret" component={Secret} />

          <Route exact path="/login" component={Login} />

          <Route exact path="/" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
