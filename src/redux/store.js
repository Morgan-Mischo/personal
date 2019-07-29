import { createStore, applyMiddleware, combineReducers } from 'redux'; 
import promiseMiddleware from 'redux-promise-middleware'; 
import userReducer from './userReducer'; 
import postsReducer from './postsReducer'; 
import followReducer from './followReducer'; 

const rootReducer = combineReducers({
    user: userReducer, 
    posts: postsReducer, 
    followed: followReducer
}); 

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(promiseMiddleware)))