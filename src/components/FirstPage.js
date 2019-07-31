import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../styling/firstPage.css";
import "../styling/reset.css";

class FirstPage extends Component {
  render() {
    return (
      <div className="display-container">
        <div className="box-medium">
          <style>
            @import
            url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
          </style>
          <div className="app-name">Fitbook</div>
          <div>
            <Link to={{ pathname: "/login" }}>
              <button className="button">Login</button>
            </Link>
          </div>
          <div>
            <Link to={{ pathname: "/signup" }}>
              <button className="button">Signup</button>
            </Link>
          </div>
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
  {}
)(FirstPage);
