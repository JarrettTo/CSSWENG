import { combineReducers} from 'redux';     //our main reducer index file
import posts from './posts.js';
import post from './post.js';
import auth from './auth.js';
export default combineReducers({
    posts, auth, post                              //return posts and auth reducer
})      