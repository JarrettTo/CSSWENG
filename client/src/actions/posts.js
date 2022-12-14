/*@brief: API calls to backend related to posts
 * @author: Justin To and Daniel Capinpin
 */

import * as api from "../api";
import {
  FETCH_ALL,
  FETCH_BY_SEARCH,
  FETCH_BY_REGISTERED,
  UPDATE,
  DELETE,
  CREATE,
  REGISTER_POST,
  REGISTER_USER,
  TOGGLE,
} from "../constants/actiontypes";

//Action creations are functions that create a function

/*@brief: delete a particular post
 * @params: req, res
 * req: server request
 * res: server response
 * @author: Justin To
 */
export const getRegisteredPosts = (regPosts) => async (dispatch) => {
  console.log("logging action registered posts");
  console.log(regPosts);
  try {
    const {
      data: { data },
    } = await api.fetchPostsbyReg(regPosts);
    console.log(data);
    const action = { type: FETCH_BY_REGISTERED, payload: data };
    dispatch(action);
  } catch (error) {
    console.log("logging error");
    console.log(error);
  }
};

/*@brief: get all posts on a certain page
 * @params: page
 * page: page number
 * @author: Justin To and Daniel Capinpin
 */
export const getPosts = (page) => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(page); //fetch posts from backend or mongodb
    const action = { type: FETCH_ALL, payload: data }; //type is just a code we can distinguish the action by
    //console.log(data);
    dispatch(action); //replacement of return which is needed cos of async
  } catch (error) {
    console.log(error);
  }
};

/*@brief: delete a particular post
 * @params: req, res
 * req: server request
 * res: server response
 * @author: Justin To
 */
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);
    console.log(data);
    dispatch({ type: FETCH_BY_SEARCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

/*@brief: create a post
 * @params: post
 * post: content to be posted
 * @author: Justin To
 */
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

/*@brief: delete a particular post
 * @params: id,post
 * id: id of post being updated
 * post: content of post to be updated with
 * @author: Justin To
 */
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

/*@brief: toggle the status of a post
 * @params: id
 * id: id of post to be toggled
 * @author: Justin To
 */
export const togglePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.togglePost(id);
    dispatch({ type: TOGGLE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

/*@brief: delete a particular post
 * @params: id
 * id: id of post to be deleted
 * @author: Justin To
 */
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

/*@brief: register for a particular post
 * @params: id, form
 * id: id of post to be registered for
 * form: registration details of user registering
 * @author: Justin To
 */
export const registerPost = (id, form) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("profile"));

  try {
    const { data } = await api.registerPost(id, form, user?.token);

    dispatch({ type: REGISTER_POST, payload: data.updatedPost });
    dispatch({ type: REGISTER_USER, payload: data.updatedUser });
  } catch (error) {
    console.log(error);
  }
};

/*@brief: get a particular post
 * @params: id
 * id: id of post to retrieve
 * @author: Justin To
 */
export const getPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPost(id); //fetch posts from backend or mongodb
    console.log(data);
    dispatch({ type: "FETCH", payload: data });
  } catch (error) {
    console.log(error);
  }
  return 0;
};
