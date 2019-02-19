import React, { Component } from "react";
import Home from "./components/Home";
import { Link, Route, Switch } from "react-router-dom";
import Secret from "./components/Secret";
import Login from "./components/Login";
import Login2 from "./components/Login2";
import Home2 from "./components/Home2";
import Secret2 from "./components/Secret2";

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
            <div className="column">
              <Link to="/login2">Login2</Link>
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path="/secret" component={Secret} />
          <Route exact path="/secret2" component={Secret2} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/login2" component={Login2} />
          <Route exact path="/" component={Home} />
          <Route exact path="/home2" component={Home2} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
