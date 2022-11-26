import { combineReducers} from 'redux';     //our main reducer index file
import posts from './posts.js';

import auth from './auth.js';
import txn from './txn.js';
import txns from './txns.js';
export default combineReducers({
    posts, auth,  txn, txns                              //return posts and auth reducer
})      