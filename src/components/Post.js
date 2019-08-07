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
    console.log(this.state.newCalories)
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
          <div className="editing">
            Height: <input
              value={newHeight}
              onChange={this.handleChange}
              name="newHeight"
              className="input-full-width"
            />
            Weight: <input
              value={newWeight}
              onChange={this.handleChange}
              name="newWeight"
              className="input-full-width"
            />
            Calories: <input
              value={newCalories}
              onChange={this.handleChange}
              name="newCalories"
              className="input-full-width"
            />
            Diet: <textarea
              value={newDiet}
              onChange={this.handleChange}
              name="newDiet"
              className="input-full-width"
            />
            Workout: <textarea
              value={newWorkout}
              onChange={this.handleChange}
              name="newWorkout"
              className="input-full-width"
            />
            Goals: <textarea
              value={newGoals}
              onChange={this.handleChange}
              name="newGoals"
              className="input-full-width"
            />
            Photo: <input
              value={newPhoto}
              onChange={this.handleChange}
              name="newPhoto"
              className="input-photo"
              alt="Loading"
            />
            <div>
              <button onClick={this.flipEdit} className="btn">
                Cancel
              </button>
              <button onClick={this.save} className="btn">
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className='posts-container' >
          
            <div className="img-container">
              <img className="input-photo" src={photo} alt="Loading" />  
            <p className="post-style"> <span className='bold'>Goals</span> {goals} </p>
            <p className="post-style"> <span className='bold'>Workout</span> {workout} </p>
            <p className="post-style"> <span className='bold'>Diet</span> {diet} </p>
            <p className="post-style"> <span className='bold'>Calories</span> {calories} </p>
            <p className="post-style"> <span className='bold'>Height</span> {height} </p>
            <p className="post-style"> <span className='bold'>Weight</span> {weight} </p>
            </div>
           
            <div >

              {this.state.editable ? (
                <div className="edit">
                  <button onClick={this.flipEdit} className="btn">
                    Edit
                  </button>

                  <button onClick={this.delete} className="btn">
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
