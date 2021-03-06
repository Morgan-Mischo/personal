import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../redux/postsReducer";
import { getUserProfile, getUser, getUserId } from "../redux/userReducer";
import { follow } from "../redux/followReducer";
import { Link } from "react-router-dom";
import Post from "./Post";
import { isFulfilled } from "q";
import Header from "./Header"; 
import "../styling/profile.scss"

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
    this.props.getUserId(this.props.match.params.id); 
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if(this.props.reduxState.user.userId[0]){
      this.setState({
        username: this.props.reduxState.user.userId[0].username, 
        first_name: this.props.reduxState.user.userId[0].first_name,
        last_name: this.props.reduxState.user.userId[0].last_name,
        picture: this.props.reduxState.user.userId[0].picture
      });
    }
    if(this.props.reduxState.user.posts){
      this.setState({
      posts: this.props.reduxState.user.posts
    })
    }
  }

    
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
    
  
    let { following } = this.state;
    let mappedPosts = this.state.posts.map(post => {
      if (this.state.posts.length) {
        return <Post key={post.id} {...post} />;
      } else {
        return <div>User has no posts</div>;
      }
    });
 
    if(this.props.reduxState.user)
    {
    return (

      
      <div className="profile">
                <div className="header-bar">
          <Header />
        </div>



        <div className= "names">
          {this.props.reduxState !== isFulfilled ? (
            <div className = "names-and-pictures">
              <div className = "just-names">

              <img src={this.state.picture} alt="profile pic" className="img-container"/>
              <div className = "names-username">
              <div className="following">
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
              <div className = 'username'>
          {this.state.username} {" "}
          </div>

          <div className="names">
            {this.state.first_name} {" "}
            {this.state.last_name}
            </div>
            
            </div>
            </div>
            
          
          <div className="posts">
          {mappedPosts}
            </div>
            </div>
          ) : (
            <div> Loading </div>
          )}

        </div>
      </div>
      
    );

  }
  else {
    return (
      <div>Loading</div>
    )
  }
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
