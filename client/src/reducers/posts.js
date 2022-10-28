export default (posts=[], action) => { //reducers take in a state and an action and return the resulting state based on the action
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload; //simply return the posts carried by action.data variable, refer to action/posts.js
        case 'CREATE':
            return [...posts, action.payload];
        case 'UPDATE':
            return posts.map((post)=> post._id == action.payload._id ? action.payload : post); //if post id is the same, turn that post into the new updated post. Otherwise, return the same post
        default:
            return posts;
    }
}