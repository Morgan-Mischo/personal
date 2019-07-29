import React, { Component } from "react"; 
import { connect } from "react-redux"; 
import { getFollowed } from '../redux/followReducer'; 
import Post from './Post'; 

class Followed extends Component {

    componentDidMount(){
        let { getFollowed, followed, id } = this.props; 
        console.log('followed', followed)
            getFollowed(id); 
            console.log(getFollowed(id)); 
    }

    render() {
        console.log(this.props.followed)
        return (
            <div>
                {/* {followed.map(post => (
                    <Post key ={followed.id} {...followed} />
                ))}  */}
                {/* {followed[0]} */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userId: state.user.user.id, 
        ...state.followed
    }; 
}

export default connect(mapStateToProps, {getFollowed})(Followed); 
