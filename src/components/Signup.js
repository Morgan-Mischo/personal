import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { signup } from '../redux/userReducer'; 

class Signup extends Component {
    constructor() {
        super(); 
        this.state = {
            username: '', 
            password: '', 
            first_name: '', 
            last_name: '', 
            email: ''
        }
    }

    handleChange = e => {
        let { name, value } = e.target; 
        this.setState({ [name]: value }); 
    }; 

    signupUser = () => {
        this.props.signup(this.state.username, this.state.password, this.state.first_name, this.state.last_name, this.state.email); 
    }; 

    render(){
        let { username, password, first_name, last_name, email} = this.state; 
        return (
            <div className="display-container">
                <div className="box-medium">
                    <div className="input-row">
                        Username: {' '}
                        <input
                        type= 'text'
                        value={username}
                        name="username"
                        onChange={this.handleChange}
                        className="input"
                        />
                    </div>
                    <div className="input-row">
                        Password: {' '}
                        <input
                        type= 'text'
                        value={password}
                        name="password"
                        onChange={this.handleChange}
                        className="input"
                        />
                    </div>
                    <div className="input-row">
                        First_name: {' '}
                        <input
                        type= 'text'
                        value={first_name}
                        name="first_name"
                        onChange={this.handleChange}
                        className="input"
                        />
                    </div>
                    <div className="input-row">
                        Last_name: {' '}
                        <input
                        type= 'text'
                        value={last_name}
                        name="last_name"
                        onChange={this.handleChange}
                        className="input"
                        />
                    </div>
                    <div className="input-row">
                        Email: {' '}
                        <input
                        type= 'text'
                        value={email}
                        name="email"
                        onChange={this.handleChange}
                        className="input"
                        />
                    </div>
                    <button onClick={this.signupUser} className="btn normal-btn">
                        Signup
                    </button>
                </div>
            </div>
        ); 
    }
}

function mapStateToProps(state) {
    return state.user; 
}

export default connect(mapStateToProps, { signup }) (Signup); 