import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { savePost } from '../redux/postsReducer'; 

class Create extends Component {
    constructor() {
        super(); 
        this.state = {
            height: '',
            weight: '', 
            calories: '', 
            diet: '', 
            workout: '', 
            goals: '', 
            photo: '', 
            save: false
        }; 
    }

    handleChange = e => {
        let { name, value } = e.target; 
        this.setState({ [name]: value }); 
    }; 

    savePost = () => {
        console.log('hitting post')
        this.props.savePost(this.state.height, this.state.weight, 
            this.state.calories, this.state.diet, this.state.workout, 
            this.state.goals, this.state.photo)
    }; 

    render() {
        let { height, weight, calories, diet, workout, goals, photo } = this.state; 
        return (
            <div className='display-container'>
                <div className='input-row'>
                    Height: { ' ' }
                    <input
                    type='text'
                    value=
                    name=""
                    onChange={this.handleChange}
                    className="input"
                    />
                </div>
            </div>
        )
    }
}