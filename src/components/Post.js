import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost, editPost, getPosts } from "../redux/postsReducer";
import { getUser } from "../redux/userReducer";
import "../styling/reset.css";
import "../styling/post.scss";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newHeight: props.height,
      newWeight: props.weight,
      newCalories: props.calories,
      newDiet: props.diet,
      newWorkout: props.workout,
      newGoals: props.goals,
      newPhoto: props.photo,
      editing: false,
      editable: false
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  flipEdit = () => this.setState({ editing: !this.state.editing });

  flipEditable = () => {
    if (this.props.user_id == this.props.loggedIn) {
      this.setState({
        editable: true
      });
    }
  };

  save = () => {
    let { id, editPost } = this.props;
    let {
      newHeight,
      newWeight,
      newCalories,
      newDiet,
      newWorkout,
      newGoals,
      newPhoto
    } = this.state;
    editPost(
      id,
      newHeight,
      newWeight,
      newCalories,
      newDiet,
      newWorkout,
      newGoals,
      newPhoto
    );
    this.flipEdit(); 
  };

  delete = () => {
    let { id, deletePost } = this.props;
    deletePost(id);
  };

  componentDidMount() {
    this.props.getUser();
    this.flipEditable();
  }

  componentDidUpdate(prevProps) {
    let { height, weight, calories, diet, workout, goals, photo } = prevProps;
    if (
      height !== this.props.height ||
      weight !== this.props.weight ||
      calories !== this.props.calories ||
      diet !== this.props.diet ||
      workout !== this.props.workout ||
      goals !== this.props.goals ||
      photo !== this.props.photo
    ) {
      this.setState({
        newHeight: height,
        newWeight: weight,
        newCalories: calories,
        newDiet: diet,
        newWorkout: workout,
        newGoals: goals,
        newPhoto: photo,
        editing: false
      });
    }
  }

  render() {

    let { height, weight, calories, diet, workout, goals, photo } = this.props;
    let {
      newHeight,
      newWeight,
      newCalories,
      newDiet,
      newWorkout,
      newGoals,
      newPhoto,
      editing
    } = this.state;
    return (
      <div className="post-container">
        {editing ? (
          <div>
            <input
              value={newHeight}
              onChange={this.handleChange}
              name="newHeight"
              className="input-full-width"
            />
            <input
              value={newWeight}
              onChange={this.handleChange}
              name="newWeight"
              className="input-full-width"
            />
            <input
              value={newCalories}
              onChange={this.handleChange}
              name="newCalories"
              className="input-full-width"
            />
            <textarea
              value={newDiet}
              onChange={this.handleChange}
              name="newDiet"
              className="input-full-width"
            />
            <textarea
              value={newWorkout}
              onChange={this.handleChange}
              name="newWorkout"
              className="input-full-width"
            />
            <textarea
              value={newGoals}
              onChange={this.handleChange}
              name="newGoals"
              className="input-full-width"
            />
            <input
              value={newPhoto}
              onChange={this.handleChange}
              name="newPhoto"
              className="input-photo"
              alt="Loading"
            />
            <div>
              <button onClick={this.flipEdit} className="btn warning-btn">
                Cancel
              </button>
              <button onClick={this.save} className="btn normal-btn">
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className='posts-container' >
          
            <div className="img-container">
              <img className="input-photo" src={photo} alt="Loading" />
            
            <p style={{background: "blue"}}> 'goals' {goals} </p>
            <p> {workout} </p>
            <h4> {diet} </h4>
            <h5> {calories} </h5>
            <h6> {height} </h6>
            <h6> {weight} </h6>
            </div>
           
            <div>

              {this.state.editable ? (
                <div>
                  <button onClick={this.flipEdit} className="btn normal-btn">
                    Edit
                  </button>

                  <button onClick={this.delete} className="btn warning-btn">
                    Delete
                  </button>
                </div>
              ) : (
                <div> </div>
              )}
            </div>
          </div>
        )}
      </div>
      
    );
  }
}

function mapStateToProps(state) {
  return { loggedIn: state.user.user.id };
}

export default connect(
  mapStateToProps,
  { deletePost, editPost, getUser, getPosts }
)(Post);
