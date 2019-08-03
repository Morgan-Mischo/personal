import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { getPosts } from '../redux/postsReducer';  
import Post from './Post'; 

class Posts extends Component {

    componentDidMount(){
        let { getPosts, posts, id } = this.props; 
        if (!posts.length) {
            getPosts(id); 
        }
    }

    render(){
        console.log('posts', this.props.posts)
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
        id: state.user.user.id, 
        ...state.posts
    }; 
}

export default connect(mapStateToProps, {getPosts})(Posts); 