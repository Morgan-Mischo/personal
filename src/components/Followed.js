import React, { Component } from "react"; 
import { connect } from "react-redux"; 
import { getFollowed } from '../redux/followReducer'; 
import Post from './Post'; 

class Followed extends Component {
    constructor() {
        super(); 
        this.state = {
            followed: []
        }

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
        let mappedPosts = this.state.followed.map(post => {
          if(this.state.followed.length) {
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
        <div>{mappedPosts}</div>
    )
}
}


        function mapStateToProps(state) {
            return {id: state.user.user.id, 
            ...state.followed};
          }
          
          export default connect(
            mapStateToProps,
            { getFollowed }
          )(Followed);

