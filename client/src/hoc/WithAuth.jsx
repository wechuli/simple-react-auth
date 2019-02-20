import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const WithAuth = Custom => {
  return class extends Component {
    state = {
      loading: true,
      redirect: false
    };
    componentDidMount() {
      axios.defaults.withCredentials = true;
      axios
        .get("http://127.0.0.1:8090/api/v1/checkAuth")
        .then(res => {
          if (res.status === 200) {
            console.log(res)
            this.setState({ loading: false });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({ loading: false, redirect: true });
        });
    }
    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/login" />;
      }
      return (
        <React.Fragment>
          <Custom {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default WithAuth;
