import axios from "axios";
import { GET_POSTS, DELETE_POST, EDIT_POST, MAKE_POST, LOGOUT } from "./actionTypes";

const initialState = {
  posts: [],
  error: false
};

export function getPosts(id) {
  let data = axios.get(`/api/posts/${id}`).then(res => res.data);
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

export function editPost(
  postId,
  newHeight,
  newWeight,
  newCalories,
  newDiet,
  newWorkout,
  newGoals,
  newPhoto
) {
  let data = axios
    .put(`/api/posts/edit/${postId}`, {
      newHeight,
      newWeight,
      newCalories,
      newDiet,
      newWorkout,
      newGoals,
      newPhoto
    })
    .then(res => res.data);
  return {
    type: EDIT_POST,
    payload: data
  };
}

export function savePost(
  postId,
  height,
  weight,
  calories,
  diet,
  workout,
  goals,
  photo
) {
  let data = axios
    .post("/api/posts", {
      postId,
      height,
      weight,
      calories,
      diet,
      workout,
      goals,
      photo
    })
    .then(res => res.data);
  return {
    type: MAKE_POST,
    payload: data
  };
}

export const logout = () => {

  return {
    type: LOGOUT, 
    payload: axios.delete('/api/logout')
  }; 
}; 

export default function postsReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case MAKE_POST + "_FULFILLED":
      return { ...state, posts: payload, error: false };
    case GET_POSTS + "_FULFILLED":
      return { posts: payload, error: false };
    case GET_POSTS + "_REJECTED":
      return { ...state, error: payload };
    case DELETE_POST + "_FULFILLED":
      return { ...state, posts: payload };
    case EDIT_POST + "_FULFILLED":
      return { ...state, posts: payload };
      case LOGOUT + '_FULFILLED': 
      return {     posts: [],
        error: false}
    default:
      return state;
  }
}
