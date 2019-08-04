import { createStore, applyMiddleware, combineReducers } from 'redux'; 
import userReducer from './userReducer'; 
import postsReducer from './postsReducer'; 
import followReducer from './followReducer'; 

import promiseMiddleware from 'redux-promise-middleware'; 
import { persistStore, persistReducer } from 'redux-persist'; 
import storage from 'redux-persist/lib/storage'; 
import promise from 'redux-promise-middleware';

const rootReducer = combineReducers({
    user: userReducer, 
    posts: postsReducer, 
    followed: followReducer
}); 

const persistConfig = { 
    key: 'root', 
    storage
}; 

const persistedReducer = persistReducer(persistConfig, rootReducer); 

export const store = createStore(
    persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(promiseMiddleware)
    )
); 

export const persistor = persistStore(store)

