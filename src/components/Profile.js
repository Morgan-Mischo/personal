import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../redux/postsReducer";
import { Link } from "react-router-dom";
import axios from "axios";

class Profile extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.props.getPosts();
    this.getUser(); 
  }

  getUser = () => {
    console.log(this.props)
    const url = this.props.match.params.id
    console.log('aaa',url)
    axios.get(`/api/getUser/${this.props.match.params.id}`)
    .then(res => {
      console.log(res)
        this.setState({
            posts: res.getPosts
        })
    })
  };

  render() {
    let mappedPosts = this.state.posts.map(post => {
      return (
        <post
        key={post.id}
        post={post}
        id={post.id}
        />
      )})
    return (
      <div>
        <Link to={{ pathname: "/" }}>
          {console.log("hitting the link")}
          <button className="btn normal-btn">Fitbook</button>
        </Link>

        <div>
          Profile
          <div className="posts">{mappedPosts}</div>
    
        </div>
       </div>
    );
  }
}

function mapStateToProps(state) {
  return state.posts;
}

export default connect(
  mapStateToProps,
  { getPosts }
)(Profile);
