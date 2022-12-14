/*@brief: redux state for posts
 * @params: state, action
 * state: state containing posts
 * action: action dispatched
 * @author: Justin To and Daniel capinpin
 */

//basically, this is where we put all the code that'll affect our state tree, so for example when i create a post i need to return all the current posts + the one i just made
export default (state = [], action) => {
  //reducers take in a state and an action and return the resulting state based on the action
  switch (action.type) {
    case "FETCH_ALL":
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      }; //simply return the posts carried by action.data variable, refer to action/posts.js. actions.payload is the { data } returned by api.getPosts, so in this case, it is an array of all the posts
    case "FETCH_BY_SEARCH":
      return { ...state, posts: action.payload };
    case "FETCH_BY_REGISTERED":
      return { ...state, posts: action.payload };
    case "CREATE":
      return { ...state, posts: [...state.posts, action.payload] };
    case "UPDATE":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      }; //if post id is the same, turn that post into the new updated post. Otherwise, return the same post
    case "DELETE":
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      }; // if post id is the same return it as null
    case "REGISTER_POST":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id == action.payload._id ? action.payload : post
        ),
      };
    case "TOGGLE":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id == action.payload._id ? action.payload : post
        ),
      };
    default:
      return state;
  }
};
