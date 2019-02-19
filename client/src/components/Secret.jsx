import React, { Component } from "react";
import axios from "axios";
class Secret extends Component {
  state = {
    message: "loading"
  };

  componentDidMount() {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:8090/api/v1/secret")
      .then(response => {
        const data = response.data;
        console.log(data);
        this.setState({
          message: data
        });
      })
      .catch(err =>{
        // console.log(err.response);
        // this.setState({
        //   message:err.response.data.message
        // })
        console.log(err);
      });
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

export default Secret;
