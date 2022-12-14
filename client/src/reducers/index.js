/*@brief: combines reducers
 * @author: Justin To and Daniel Capinpin
 */
import { combineReducers } from "redux"; //our main reducer index file
import posts from "./posts.js";

import auth from "./auth.js";
import txn from "./txn.js";
import txns from "./txns.js";
import log from "./log.js";
import logs from "./logs.js";
export default combineReducers({
  posts,
  auth,
  txn,
  txns,
  log,
  logs, //return posts and auth reducer
});
