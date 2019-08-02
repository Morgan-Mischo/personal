import React, { Component } from "react"; 
import { connect } from "react-redux"; 
import { getFollowed, follow } from '../redux/followReducer'; 
import Post from './Post'; 
import Profile from './Profile'; 

class Followed extends Component {
    constructor() {
        super(); 
        this.state = {
            followed: []
        }; 

    }


    componentDidMount(){
        let { getFollowed, followed, id } = this.props; 
            getFollowed(id); 
            this.setState({
                id: this.props.id
            })
    }



    componentDidUpdate(prevProps) {
        if(prevProps.followed !== this.props.followed) {
            this.setState({
                followed: this.props.followed 
            })
            
        }
        
    }
    render() {
        console.log(this.props.followed)
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
        <div>{mappedPosts}
        </div>
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

