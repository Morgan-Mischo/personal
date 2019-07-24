import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { getPosts } from '../redux/postsReducer';  
import Post from './Post'; 

class Posts extends Component {

    componentDidMount(){
        let { getPosts, posts, userId } = this.props; 
        if (!posts.length) {
            getPosts(userId); 
        }
    }

    render(){
        let { posts } = this.props; 
        return(
            <div>
                {posts.map(post => (
                    <Post key={post.id} {...post} />
                ))}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userId: state.user.user.id, 
        ...state.posts
    }; 
}

export default connect(mapStateToProps, {getPosts})(Posts); 