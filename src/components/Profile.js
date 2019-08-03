import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../redux/postsReducer";
import { getUserProfile, getUser, getUserId } from "../redux/userReducer";
import { follow } from "../redux/followReducer";
import { Link } from "react-router-dom";
import Post from "./Post";

class Profile extends Component {
  state = {
    posts: [],
    user_following: "",
    user_followed: "",
    following: false,
    username: "",
    first_name: "",
    last_name: "",
    picture: "", 
    user: []
  };

  componentDidMount() {
    this.props.getUserProfile(this.props.match.params.id);
    this.props.getUser();
    console.log('hi', this.props.getUserId(this.props.match.params.id) )
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reduxState.user.posts !== this.props.reduxState.user.posts) {
      console.log('look', this.props.getUserId(this.props.match.params.id))
      this.setState({
        posts: this.props.reduxState.user.posts,
        username: this.props.username,
        first_name: this.props.reduxState.user.posts[0].first_name,
        last_name: this.props.reduxState.user.posts[0].last_name,
        picture: this.props.reduxState.user.posts[0].picture
      });
    }
    console.log('hi there', prevProps.reduxState.user.user[0])
    
    if (prevProps.reduxState.user.user[0] !== this.props.reduxState.user.user[0]) {
    this.setState({
      user: prevProps.reduxState.user.user[0]
    })
  }
  }

  flipFollow = () => this.setState({ following: !this.state.following });

  followUser = () => {
    this.flipFollow();
    this.props.follow(this.props.id, this.props.match.params.id);
  };

  render() {
    console.log('state', this.username)
    // console.log('username',this.props.getUserId(this.props.match.params.id) )
    let { user_following, user_followed, following } = this.state;
    let mappedPosts = this.state.posts.map(post => {
      if (this.state.posts.length) {
        return <Post key={post.id} {...post} />;
      } else {
        return <div>User has no posts</div>;
      }
    });
    console.log(this.state.username);

    return (
      <div>
        <Link to={{ pathname: "/" }}>
          <button className="btn normal-btn">Fitbook</button>
        </Link>

        <div>
          {this.props.id != this.props.match.params.id ? (
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
          ) : (
            <div />
          )}
        </div>

        <div>
          <h1> {this.props.username} </h1>
          <h2>
            {this.props.first_name}
            {this.props.last_name}
          </h2>
          <img src={this.props.picture} alt="profile pic" />
          {mappedPosts}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { reduxState: state, id: state.user.user.id, 
    username: state.user.user.username, first_name: state.user.user.first_name, 
    picture: state.user.user.picture, last_name: state.user.user.last_name };
}

export default connect(
  mapStateToProps,
  { getPosts, getUserProfile, getUser, follow, getUserId }
)(Profile);
