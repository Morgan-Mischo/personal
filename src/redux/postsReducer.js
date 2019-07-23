import axios from 'axios'; 
import { GET_POSTS, DELETE_POST } from './actionTypes'; 

const initialState = {
    posts: [], 
    error: false
}

export function getPosts(userId) {
    let data = axios.get(`/api/posts/${userId}`).then(res => res.data); 
    return {
        type: GET_POSTS, 
        payload: data
    }; 
}

export function deletePost(postId) {
    let data = axios.delete(`/api/posts/${postId}`).then(res => res.data); 
    return {
        type: DELETE_POST, 
        payload: data
    }; 
}

export default function postsReducer(state = initialState, action) {
    let { type, payload } = action; 
    switch(type) {
        case GET_POSTS + '_FULFILLED': 
        return { posts: payload, error: false }; 
        case GET_POSTS + '_REJECTED':
            return { ...state, error: payload };
            case DELETE_POST + '_FULFILLED': 
            return { ...state, posts: payload }; 
        default: 
        return state; 
    }
}