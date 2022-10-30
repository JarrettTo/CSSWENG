//basically, this is where we put all the code that'll affect our state tree, so for example when i create a post i need to return all the current posts + the one i just made
export default (posts=[], action) => { //reducers take in a state and an action and return the resulting state based on the action
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload; //simply return the posts carried by action.data variable, refer to action/posts.js. actions.payload is the { data } returned by api.getPosts, so in this case, it is an array of all the posts 
        case 'CREATE':
            return [...posts, action.payload];
        case 'UPDATE':
            return posts.map((post)=> post._id == action.payload._id ? action.payload : post); //if post id is the same, turn that post into the new updated post. Otherwise, return the same post
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload); // if post id is the same return it as null
        default:
            return posts;
    }
}