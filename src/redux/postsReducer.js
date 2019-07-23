
const initialState = {
    posts: [], 
    error: false
}

export default function postsReducer(state = initialState, action) {
    let { type, payload } = action; 
    switch(type) {
        default: 
        return state; 
    }
}