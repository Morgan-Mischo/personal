import React, { Component } from 'react'; 
import { Redirect, Link } from 'react-router-dom'; 
import { connect } from 'react-redux'; 
import { getUser } from '../redux/userReducer'; 
import Posts from './Posts'; 

class Dashboard extends Component {
    componentDidMount(){
        if(!this.props.user.loggedIn) {
            this.props.getUser(); 
        } 
    }
    render(){
        let { user, error, redirect } = this.props; 
        if(error || redirect) return <Redirect to="/firstpage"/>
        if(!user.loggedIn) return <div>Loading</div>
        return(
            <div className='display-container'>
                <h3>Posts</h3>
                <Posts />
                <Link to={{ pathname: '/search'}}>
                <button className="search">Search</button>
                </Link>
                <Link to={{ pathname: '/profile'}}>
                <button className="profile">Profile</button>
                </Link>
                <Link to={{ pathname: '/camera'}}>
                <button className="camera">Camera</button>
                </Link>
            </div>
        ); 
    }
}
function mapStateToProps(state) {
    return state.user; 
}

export default connect(
    mapStateToProps, 
    { getUser }) (Dashboard); 