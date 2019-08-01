import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../redux/postsReducer";
import { getUserProfile, logout, getUser } from '../redux/userReducer'; 
import { Link } from "react-router-dom";
import Post from './Post';
import Follow from "./Follow"; 

class Profile extends Component {
  
  state = {
    posts: [], 
    id: this.props.match.params.id
  };

  componentDidMount() {
    this.props.getUserProfile(this.props.match.params.id)
  }

  componentDidUpdate(prevProps) {
    if(prevProps.reduxState.user.posts !== this.props.reduxState.user.posts) {
      this.setState({
        posts: this.props.reduxState.user.posts
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


    return (
      <div>
        <Link to={{ pathname: "/" }}>
          {console.log("hitting the link")}
          <button className="btn normal-btn">Fitbook</button>
        </Link>

        <div>
          Profile
          {mappedPosts}
          <Follow />
        </div>
       </div>
    );
  }
}

function mapStateToProps(state) {
  return {reduxState: state};
}

export default connect(
  mapStateToProps,
  { getPosts, getUserProfile }
)(Profile);
