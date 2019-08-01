import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../redux/userReducer";
import Followed from "./Followed";
import Header from "./Header";
import "../styling/reset.css";
import "../styling/dashboard.scss";

class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.user.loggedIn) {
      this.props.getUser();
    }
  }
  render() {
    let { user, error, redirect } = this.props;

    if (error || redirect) return <Redirect to="/firstpage" />;
    if (!user.loggedIn) return <div>Loading</div>;
    return (
      <div className="display-container-dash">
        <style>
          @import
          url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
        </style>

        <div className="header-bar">
          <Header />
        </div>

        <div className="box-medium-dash">
          <Followed />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state.user;
}

export default connect(
  mapStateToProps,
  { getUser }
)(Dashboard);
