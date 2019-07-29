import axios from 'axios'; 
import { GET_FOLLOWED } from './actionTypes'; 

const initialState = {
    followed: []
}; 

export const getFollowed = (id) => {
    let data = axios.get(`/api/getFollowed/${id}`).then(res => res.data)
    return {
        type: GET_FOLLOWED, 
        payload: data
    }
}

export default function(state = initialState, action) {
    let { type, payload } = action; 
    switch(type) {
        case GET_FOLLOWED + '_FULFILLED':
        return { ...state, followed: payload, error: false}
        default: 
        return state; 
    }
}