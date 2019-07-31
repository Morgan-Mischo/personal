import React, { Component } from 'react'; 
import { login } from '../redux/userReducer'; 
import { connect } from 'react-redux'; 
import { Redirect } from 'react-router-dom'; 
import "../styling/reset.css"; 
import "../styling/login.scss"; 
class Login extends Component {
    constructor() {
        super(); 
        this.state = {
            username: '', 
            password: ''
        }; 
    }

    handleChange = e => {
        let { name, value } = e.target; 
        this.setState({ [name]: value }); 
    }; 

    loginUser = () => {
        this.props.login(this.state.username, this.state.password); 
    }; 

    render() {
        let { username, password } = this.state; 
        let { user } = this.props; 
        if (user.loggedIn) return <Redirect to="/" />; 
        return(
            <div className="display-container">
                <div className="box-medium">
                <style>
            @import
            url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
          </style>
          <div className="app-name">Fitbook</div>
                    <div className="input-row">
                        <input
                        type="text"
                        value={username}
                        name="username"
                        onChange={this.handleChange}
                        className="input"
                        placeholder="username"
                        />
                    </div>
                    <div className="input-row">
                        <input
                        type="text"
                        value={password}
                        name="password"
                        onChange={this.handleChange}
                        className="input"
                        placeholder="password"
                        />
                    </div>
                    <button onClick={this.loginUser} className="button">
                        Login
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.user; 
}

export default connect(mapStateToProps, { login })(Login); 
