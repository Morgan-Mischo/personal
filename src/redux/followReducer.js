import axios from "axios";
import { GET_FOLLOWED, FOLLOW } from "./actionTypes";

const initialState = {
  followed: []
};

export const getFollowed = id => {
  let data = axios.get(`/api/getFollowed/${id}`).then(res => {
    console.log(res.data, "data");
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
export default function(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case GET_FOLLOWED + "_FULFILLED":
      return { ...state, followed: payload, error: false };
    case FOLLOW + "_FULFILLED":
      return { ...state, followed: payload, error: false };
    default:
      return state;
  }
}
