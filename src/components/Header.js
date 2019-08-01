import React from "react";
import { connect } from "react-redux";
import { logout } from "../redux/userReducer";
import { Link } from "react-router-dom";
import { getUser } from "../redux/userReducer";
import Followed from "./Followed";

function Header(props) {
  return (
    <div className="header">
      <div className="app-name-dash">Fitbook</div>
      <Link to={{ pathname: "/search" }}>
        <button className="buttons-dash">Search</button>
      </Link>
      <Link to={{ pathname: `/profile/${props.user.id}` }}>
        <button className="buttons-dash">Profile</button>
      </Link>
      <Link to={{ pathname: "/create" }}>
        <button className="buttons-dash-post">Post</button>
      </Link>
      <button onClick={props.logout} className="button">
        Logout
      </button>
     
    </div>
  );
}

function mapStateToProps(state) {
  return state.user;
}

export default connect(
  mapStateToProps,
  { logout }
)(Header);
