import React, { Component } from "react";
import axios from "axios";
class Secret2 extends Component {
  state = {
    message: "loading"
  };

  componentDidMount() {
    fetch("http://localhost:8090/api/v1/secret", { credentials: "include" })
      .then(res => res.json())
      .then(resjson =>
        this.setState({
          message: resjson.message
        })
      );
  }

  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-8">
            <h1 className="title">Secret</h1>
            <p className="content">{this.state.message}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Secret2;
