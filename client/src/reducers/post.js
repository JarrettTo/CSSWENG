export default (post=null, action) => { //reducers take in a state and an action and return the resulting state based on the action
    switch (action.type){
        case 'FETCH':
            post=action.payload;
            return post;    
        default:
            return post;
    }
}