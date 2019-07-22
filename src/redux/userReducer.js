import axios from 'axios'; 
import { SIGNUP } from './actionTypes';

const initialState = {
    user: {}, 
    redirect: false, 
    error: false
}; 

export const signup = (username, password, first_name, last_name, email) => {
    let data = axios
    .post('/api/signup', {username, password, first_name, last_name, email})
    .then(res => res.data); 

    return {
        type: SIGNUP, 
        payload: data
    }; 
}; 

export default function(state = initialState, action) {
    let { type, payload } = action; 
    switch (type) {
        case SIGNUP + '_FULFILLED': 
        return {
            ...state, 
            redirect: false, 
            user: payload, 
            error: false
        }; 
        case SIGNUP + '_REJECTED': 
        return { ...state, error: payload }; 
        default: 
        return state; 
    }
}