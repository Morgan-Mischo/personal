import React, { Component } from 'react'; 
import { Redirect, Link } from 'react-router-dom'; 
import { connect } from 'react-redux'; 

class FirstPage extends Component {
    
    render() {
        return (
            
            < div className='first-page-display'>
                <Link to={{ pathname: '/login'}}>
                <button className='login'>
                    Login
                </button>
                </Link>
                <Link to={{ pathname: '/signup'}}>
                <button className='signup'>
                    Signup
                </button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.user
}

export default connect(mapStateToProps, {} )(FirstPage); 