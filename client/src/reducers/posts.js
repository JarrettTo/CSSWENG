export default (posts=[], action) => { //reducers take in a state and an action and return the resulting state based on the action
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload; //simply return the posts carried by action.data variable, refer to action/posts.js
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}