import axios from 'axios'; 
import { SIGNUP, LOGIN } from './actionTypes';

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

export const login = (username, password) => {
    let data = axios
    .post('/api/login', { username, password })
    .then(res => res.data); 
    return {
        type: LOGIN, 
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
        case LOGIN + '_FULFILLED':
            return {
                ...state, 
                user: payload, 
                redirect: false, 
                error: false
            }; 
        case LOGIN + '_REJECTED':
            return { ...state, error: payload }; 
        default: 
        return state; 
    }
}