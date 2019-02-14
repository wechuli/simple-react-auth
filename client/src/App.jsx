import React, { Component } from "react";
import Home from "./components/Home";
import { Link, Route, Switch } from "react-router-dom";
import Secret from "./components/Secret";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="container">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/secret">Secret</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/secret" component={Secret} />
          <Route exact path="/" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
