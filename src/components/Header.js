import React from "react";
import { connect } from "react-redux";
import { logout } from "../redux/userReducer";
import { Link } from "react-router-dom";
import { getUser } from "../redux/userReducer";
import Followed from "./Followed";
import '../styling/header.scss'; 

function Header(props) {

  return (
    <div className="header">
              <Link to={{ pathname: "/" }} className="app-name">
          <button className="app-name">Fitbook</button>
        </Link>
      <div className="buttons-bar">
      <Link to={{ pathname: "/search" }}>
        <button className="buttons">Search</button>
      </Link>
      <Link to={{ pathname: `/profile/${props.user.id}` }}>
        <button className="buttons">Profile</button>
      </Link>
      <Link to={{ pathname: "/create" }}>
        <button className="buttons">Post</button>
      </Link>
      <Link to={{ pathname: "/firstpage" }}>
      <button onClick={props.logout} className="buttons">
        Logout
      </button>
      </Link>
      </div>
     
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
