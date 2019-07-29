import React, { Component } from "react"; 
import { connect } from "react-redux"; 
import { getFollowed } from '../redux/followReducer'; 
import Post from './Post'; 

class Followed extends Component {
    state = {
        followed: []
    }

    componentDidMount(){
        let { getFollowed, followed, id } = this.props; 
        console.log('followed', followed)
            getFollowed(id); 
            console.log(getFollowed(id)); 
    }

    componentDidUpdate(prevProps) {
        if(prevProps.followed !== this.props.followed) {
            console.log('updatefollowed', this.props.followed)
            this.setState({
                followed: this.props.followed 
            })
            
        }
        
    }
    render() {
        let mappedPosts = this.state.posts.map(post => {
          if(this.state.posts.length) {
            return (
            <Post key={post.id} {...post} />
            )
          }
          else {
            return (
            <div>User has no posts</div>
            )
          }
        }
        )



function mapStateToProps(state) {
    return {
        id: state.user.user.id, 
        ...state.followed
    }; 
}

export default connect(mapStateToProps, {getFollowed})(Followed)
