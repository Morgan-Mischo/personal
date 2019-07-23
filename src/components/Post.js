import React, { Component } from 'react'; 
import { deletePost } from 'postReducer.js'; 

class Post extends Component{
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
            editing: false
        }; 
    }

    handleChange = e => {
        let { name, value } = e.target; 
        this.setState({ [name]: value }); 
    }; 


    flipEdit = () => this.setState({ editing: !this.state.editing }); 

    delete = () => {
        let { id, deletePost } = this.props; 
        deletePost(id); 
    }; 


    render(){
        let { height, weight, calories, diet, workout, goals, photo } = this.props; 
        let { newHeight, newWeight, newCalories, newDiet, newWorkout, newGoals, newPhoto, editing} = this.state; 
        return(
            <div className='post-container'>
                { editing ? (
                    <div>
                        <input
                        value={newHeight}
                        onChange={this.handleChange}
                        name="newHeight"
                        className="input full-width"
                        />
                      <input
                        value={newWeight}
                        onChange={this.handleChange}
                        name="newWeight"
                        className="input full-width"
                        />
                        <input
                        value={newCalories}
                        onChange={this.handleChange}
                        name="newCalories"
                        className="input full-width"
                        />
                        <textarea
                        value={newDiet}
                        onChange={this.handleChange}
                        name="newDiet"
                        className="input full-width"
                        />
                      <textarea
                        value={newWorkout}
                        onChange={this.handleChange}
                        name="newWorkout"
                        className="input full-width"
                        />
                     <textarea
                        value={newGoals}
                        onChange={this.handleChange}
                        name="newGoals"
                        className="input full-width"
                        />
                        <div>
                            <button onClick={this.flipEdit} className="btn warning-btn">
                                Cancel
                            </button>
                        </div>
                        </div>
                ) : (
                    <div>
                <img src = {photo} alt="Loading"></img>
                <h3> {goals} </h3>
                <h4> {workout} </h4>
                <h4> {diet} </h4>
                <h5> {calories} </h5>
                <h6> {height} </h6>
                <h6> {weight} </h6>
                <div>
                    <button onClick={this.flipEdit} className="btn normal-btn">
                        Edit
                    </button>
                    <button onClick={this.delete} className="btn warning-btn">
                        Delete
                    </button>
                    </div>
                </div>
            
                )}
                </div>
        ); 
}
    }