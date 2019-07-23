import axios from 'axios'; 
import { GET_POSTS } from './actionTypes'; 

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

export default function postsReducer(state = initialState, action) {
    let { type, payload } = action; 
    switch(type) {
        case GET_POSTS + '_FULFILLED': 
        return { posts: payload, error: false }; 
        case GET_POSTS + '_REJECTED':
            return { ...state, error: payload };
        default: 
        return state; 
    }
}