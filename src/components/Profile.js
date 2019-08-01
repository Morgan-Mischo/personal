import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../redux/postsReducer";
import { getUserProfile } from '../redux/userReducer'; 
import { Link } from "react-router-dom";
import { follow } from '../redux/followReducer'; 
import Post from './Post';
import Follow from "./Follow"; 

class Profile extends Component {
  
  state = {
    posts: [], 
    user_following: '', 
    user_followed: '', 
    following: false, 
    id: ''
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
    if(prevProps.reduxState.user.id !== this.props.reduxState.user.id) {
      this.setState({
        id: this.props.reduxState.user.id
      })
    }
  }

  flipFollow = () => this.setState({ following: !this.state.following }); 

  followUser = () => {
      this.flipFollow(); 
      this.props.follow(this.props.match.params.id, 
          this.state.id); 
  }; 

  render() {
    let{ user_following, user_followed, following } = this.state; 
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
          <button className="btn normal-btn">Fitbook</button>
        </Link>

        

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


        <div>
          Profile
          {mappedPosts}
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
