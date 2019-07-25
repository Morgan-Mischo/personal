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
      console.log('getuser')
    axios.get(`/api/getUser/${this.props.match.url}`)
    .then(res => {
        this.setState({
            posts: res.userId.getPosts
        })
        console.log(this.posts)
    })
  };

  render() {
      console.log(this.props)
    return (
      <div>
        <Link to={{ pathname: "/" }}>
          {console.log("hitting the link")}
          <button className="btn normal-btn">Fitbook</button>
        </Link>

        <div>
          Posts
          {this.posts}
    
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
