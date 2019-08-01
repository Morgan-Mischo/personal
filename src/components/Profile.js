import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../redux/postsReducer";
import { getUserProfile, getUser } from '../redux/userReducer'; 
import { follow } from '../redux/followReducer'; 
import { Link } from "react-router-dom";
import Post from './Post';

class Profile extends Component {
  
  state = {
    posts: [], 
    user_following: '', 
    user_followed: '', 
    following: false, 
  };

  componentDidMount() {
    this.props.getUserProfile(this.props.match.params.id)
    this.props.getUser()
    
  }

  componentDidUpdate(prevProps) {
    if(prevProps.reduxState.user.posts !== this.props.reduxState.user.posts) {
      this.setState({
        posts: this.props.reduxState.user.posts
      })
    }
  }

  flipFollow = () => this.setState({ following: !this.state.following }); 

  followUser = () => {
      this.flipFollow(); 
      this.props.follow(this.props.id, this.props.match.params.id  ); 
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
  return {reduxState: state, id: state.user.user.id};
}

export default connect(
  mapStateToProps,
  { getPosts, getUserProfile, getUser, follow }
)(Profile);
