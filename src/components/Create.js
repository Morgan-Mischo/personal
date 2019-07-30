import React, { Component } from "react";
import { connect } from "react-redux";
import { savePost } from "../redux/postsReducer";
import {  Link } from 'react-router-dom'; 

class Create extends Component {
  constructor() {
    super();
    this.state = {
      height: "",
      weight: "",
      calories: "",
      diet: "",
      workout: "",
      goals: "",
      photo: "",
      save: false
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
    console.log("state", this.state)
  };

  savePost = () => {
    console.log("hitting post");
    this.props.savePost(
      this.state.height,
      this.state.weight,
      this.state.calories,
      this.state.diet,
      this.state.workout,
      this.state.goals,
      this.state.photo
    );
  };

  render() {
    let { height, weight, calories, diet, workout, goals, photo } = this.state;
    return (
      <div className="display-container">
        <div className="input-row">
          Height:{" "}
          <input
            type="text"
            value={height}
            name="height"
            onChange={this.handleChange}
            className="input"
          />
          Weight: {" "}
          <input
            type="text"
            value={weight}
            name="weight"
            onChange={this.handleChange}
            className="input"
          />
          Calories: {" "}
          <input
            type="text"
            value={calories}
            name="calories"
            onChange={this.handleChange}
            className="input"
          />
          Diet: {" "}
          <textarea
            type="text"
            value={diet}
            name="diet"
            onChange={this.handleChange}
            className="input"
          />
          Workout: {" "}
          <textarea
            type="text"
            value={workout}
            name="workout"
            onChange={this.handleChange}
            className="input"
          />
          Goals: {" "}
          <textarea
            type="text"
            value={goals}
            name="goals"
            onChange={this.handleChange}
            className="input"
          />
          Photo: {" "}
          <input
            type="text"
            value={photo}
            name="photo"
            onChange={this.handleChange}
            className="input"
          />
        </div>
        <Link to={{ pathname: '/'}}>
            {console.log("hitting dashboard link")}
            <button onClick={this.savePost} className="btn">
                Post!
            </button>
        </Link>
      </div>
    );
  }
}

export default connect(null, {savePost})(Create); 