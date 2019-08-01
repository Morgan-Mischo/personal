import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { follow } from '../redux/followReducer'; 
import { Redirect, Link } from 'react-router-dom'; 

class Follow extends Component {
    constructor() {
        super(); 
        this.state = {
            user_following: '', 
            user_followed: '', 
            following: false
        }; 
    }

    flipFollow = () => this.setState({ following: !this.state.following }); 

    followUser = () => {
        console.log('hitting follow')
        this.flipFollow(); 
        this.props.follow(this.props.match.params.id, 
            this.props.reduxState.user.user.id); 
    }; 

    render() {
        console.log("hello", this.state.props)
        let{ user_following, user_followed, following } = this.state; 
        return (
            <div className="following">
                {following ? (
                    <button onClick={this.flipFollow} className="follow-button">
                        Following!
                    </button>
                ) : (
                    <button onClick={this.followUser} className="follow-button">
                        Follow
                    </button>
                )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.user; 
}

export default connect(mapStateToProps, {follow })(Follow); 