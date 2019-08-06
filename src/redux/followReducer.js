import axios from "axios";
import { GET_FOLLOWED, FOLLOW, LOGOUT_FOLLOW } from "./actionTypes";

const initialState = {
  followed: []
};

export const getFollowed = id => {
  let data = axios.get(`/api/getFollowed/${id}`).then(res => {
    return res.data;
  });
  return {
    type: GET_FOLLOWED,
    payload: data
  };
};

export function follow(user_following, user_followed) {
  let data = axios
    .post("/api/follow", { user_following, user_followed })
    .then(res => res.data);
  return {
    type: FOLLOW,
    payload: data
  };
}

export const logoutFollow = () => {
  axios.delete('/api/logout').then(res => console.log(res.data)).catch(err => alert(err))
  return {
    type: LOGOUT_FOLLOW
  }; 
};

export default function(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case GET_FOLLOWED + "_FULFILLED":
      return { ...state, followed: payload, error: false };
    case FOLLOW + "_FULFILLED":
      return { ...state, followed: payload, error: false };
      case LOGOUT_FOLLOW : 
      return {   followed: []}
    default:
      return state;
  }
}
