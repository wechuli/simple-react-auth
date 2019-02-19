import React, { Component } from "react";
import axios from "axios";
class Home extends Component {
  state = {
    message: "loading" 
  };

  componentDidMount() {

    axios
      .get("http://127.0.0.1:8090/api/v1/home")
      .then(response => {
        const data = response.data;
        this.setState({
          message: data.message
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-8">
            <h1 className="title">Home</h1>
            <p className="content">{this.state.message}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
