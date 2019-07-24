import React, { Component } from 'react'; 
import { Redirect } from 'react-router-dom'; 
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