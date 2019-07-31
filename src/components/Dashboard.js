import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../redux/userReducer";
import Followed from "./Followed"; 
import "../styling/reset.css";
import "../styling/dashboard.css";


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
          <div className="app-name-dash">Fitbook</div>
          <Link to={{ pathname: "/search" }}>
            <button className="buttons-dash">Search</button>
          </Link>
          <Link to={{ pathname: `/profile/${this.props.user.id}` }}>
            <button className="buttons-dash">Profile</button>
          </Link>
          <Link to={{ pathname: "/create" }}>
            <button className="buttons-dash-post">Post</button>
          </Link>
    
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
