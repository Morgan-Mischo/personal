import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../redux/userReducer";
import Suggestions from "./Suggestions";
import { Link } from "react-router-dom";

//redo this with vanilla js

class Search extends Component {
  state = {
    query: "",
    results: []
  };

  componentDidMount() {
    this.props.getUsers();
  }

  getInfo = () => {
    this.setState({
      results: this.props.users.filter(
        user =>
          user.username
            .toLowerCase()
            .includes(this.state.query.toLowerCase()) ||
          user.first_name
            .toLowerCase()
            .includes(this.state.query.toLowerCase()) ||
          user.last_name.toLowerCase().includes(this.state.query.toLowerCase())
      )
    });
  };

  returnNothing = () => {
    this.setState({
      results: []
    });
  };

  grabUser = () => {
       
  }

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query) {
          this.getInfo();
        } else if (!this.state.query) {
          this.returnNothing();
        }
      }
    );
  };

  render() {
    return (
      <div>
        <Link to={{ pathname: "/" }}>
          <button className="btn normal-btn">Fitbook</button>
        </Link>


        <form>
          <input
            placeholder="Search for..."
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <Suggestions results={this.state.results} />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.user;
}

export default connect(
  mapStateToProps,
  { getUsers }
)(Search);
