import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { signup } from '../redux/userReducer'; 
import { Redirect, Link } from 'react-router-dom'; 
import '../styling/reset.css';  
import '../styling/signup.scss'; 

class Signup extends Component {
    constructor() {
        super(); 
        this.state = {
            username: '', 
            password: '', 
            first_name: '', 
            last_name: '', 
            email: '', 
            picture: ''
        }
    }

    handleChange = e => {
        let { name, value } = e.target; 
        this.setState({ [name]: value }); 
    }; 

    signupUser = () => {
        console.log("hitting signup")
        this.props.signup(this.state.username, this.state.password, this.state.first_name, this.state.last_name, this.state.email, this.state.picture); 
    }; 

    render(){
        let { username, password, first_name, last_name, email, picture} = this.state; 
        let { user } = this.props; 
        if (user.loggedIn) return <Redirect to="/" />
        return (
            <div className="display-container">
                <div className="box-medium">
                <div className="app-name">Fitbook</div>
                    <div className="input">
                        <input
                        type= 'text'
                        value={username}
                        name="username"
                        onChange={this.handleChange}
                        className="input"
                        placeholder="username"
                        />
                    </div>
                    <div className="input">
                        <input
                        type= 'text'
                        value={password}
                        name="password"
                        onChange={this.handleChange}
                        className="input"
                        placeholder="password"
                        />
                    </div>
                    <div className="input">
                        <input
                        type= 'text'
                        value={first_name}
                        name="first_name"
                        onChange={this.handleChange}
                        className="input"
                        placeholder="first name"
                        />
                    </div>
                    <div className="input">
                        <input
                        type= 'text'
                        value={last_name}
                        name="last_name"
                        onChange={this.handleChange}
                        className="input"
                        placeholder="last name"
                        />
                    </div>
                    <div className="input">
                        <input
                        type= 'text'
                        value={email}
                        name="email"
                        onChange={this.handleChange}
                        className="input"
                        placeholder="email"
                        />
                    </div>
                    <div className="input">
                        <input
                        type= 'text'
                        value={picture}
                        name="picture"
                        onChange={this.handleChange}
                        className="input"
                        placeholder="picture url"
                        />
                    </div>
                    <Link to={{ pathname: '/'}}>
                        {console.log("hitting the link")}
                    <button onClick={this.signupUser} className="button">
                        Signup
                    </button>
                    </Link>
                </div>
            </div>
        ); 
    }
}

function mapStateToProps(state) {
    return state.user; 
}

export default connect(mapStateToProps, { signup }) (Signup); 