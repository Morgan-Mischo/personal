import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../redux/userReducer";
import Suggestions from "./Suggestions";
import { Link } from "react-router-dom";
import Header from "./Header"; 
import "../styling/search.scss"; 

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
        <div className="search">
                <div className="header-bar">
          <Header />
        </div>


        <form className="search-bar">
          <input className="searching"
            placeholder="Search for..."
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <Suggestions results={this.state.results} className='results'/>
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
