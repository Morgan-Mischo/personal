import axios from "axios";
import { SIGNUP, LOGIN, LOGOUT, GET_USER, GET_USERS, GET_USER_PROFILE, GET_USER_ID } from "./actionTypes";

const initialState = {
  user: {},
  redirect: false,
  error: false, 
  users: [], 
  posts: []
};

export const signup = (username, password, first_name, last_name, email, picture) => {
  let data = axios
    .post("/api/signup", { username, password, first_name, last_name, email, picture })
    .then(res => res.data);

  return {
    type: SIGNUP,
    payload: data
  };
};

export const login = (username, password) => {
  let data = axios
    .post("/api/login", { username, password })
    .then(res => res.data);
  return {
    type: LOGIN,
    payload: data
  };
};

export const logout = () => {
  axios.delete('/api/logout').then(res => console.log(res.data)).catch(err => alert(err))
  return {
    type: LOGOUT
  }; 
}; 

export const getUser = () => {
  let data = axios.get("/api/user").then(res => res.data);
  return {
    type: GET_USER,
    payload: data
  };
};

export const getUserId = (id) => {
  let data = axios.get(`/api/user/${id}`).then(res => res.data);
  return {
    type: GET_USER_ID,
    payload: data
  };
};

export const getUsers = () => {
  let data = axios.get("/api/users").then(res => res.data); 
  return {
    type: GET_USERS, 
    payload: data
  }; 
}; 

export const getUserProfile = (id) => {
  let data = axios.get(`/api/getUserProfile/${id}`).then(res => res.data)
  return {
    type: GET_USER_PROFILE, 
    payload: data
  }
  
}

export default function(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case SIGNUP + "_FULFILLED":
      return {
        ...state,
        redirect: false,
        user: payload,
        error: false
      };
    case SIGNUP + "_REJECTED":
      return { ...state, error: payload };
    case LOGIN + "_FULFILLED":
      return {
        ...state,
        user: payload,
        redirect: false,
        error: false
      };
    case LOGIN + "_REJECTED":
      return { ...state, error: payload };
      case GET_USER + '_PENDING': 
      return { ...state, redirect: false, error: false };
      case GET_USER + '_FULFILLED': 
      return { ...state, user: payload, error: false }; 
      case GET_USER + '_REJECTED': 
      return { ...state, redirect: true, error: payload }; 
      case GET_USER_ID + '_FULFILLED': 
      return { ...state, user: payload, error: false }; 
      case GET_USERS + '_FULFILLED': 
      return { ...state, users: payload}; 
      case GET_USER_PROFILE + '_FULFILLED': 
      return { ...state, posts: payload}
      case LOGOUT + '_FULFILLED': 
      return {   user: {},
      redirect: false,
      error: false, 
      users: [], 
      posts: []}
    default:
      return state;
  }
}
