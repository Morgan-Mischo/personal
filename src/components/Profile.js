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
    this.getInfo();
  }

  getInfo = () => {
    axios.get(`/api/getUser/${this.props.match.url}`)
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
          <Link 
            to={'/profile/${this.props.users.username'}
            className="link-to"
            />
    
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
