import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../redux/postsReducer";
import { getUserProfile } from '../redux/userReducer'
import { Link } from "react-router-dom";
import axios from "axios";

class Profile extends Component {
  
  state = {
    posts: []
  };

  componentDidMount() {
    // this.props.getPosts();
    console.log("params", this.props.getUserProfile)
   this.getUser()
  
   console.log('posts', this.state.posts)
   console.log('props',this.props)
  }

  getUser = () => {
    this.props.getUserProfile(this.props.match.params.id); 
    }

  render() {
    
    // let mappedPosts = this.state.posts.map(post => {
    //   return (
    //     <post
    //     key={post.id}
    //     post={post}
    //     id={post.id}
    //     />
    //   )})
    return (
      <div>
        <Link to={{ pathname: "/" }}>
          {console.log("hitting the link")}
          <button className="btn normal-btn">Fitbook</button>
        </Link>

        <div>
          Profile
          {/* <Link
          to={`/profile/${this.props.user}`} */}
    
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
