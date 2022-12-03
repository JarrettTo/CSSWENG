export default (log=null, action) => { //reducers take in a state and an action and return the resulting state based on the action
    switch (action.type){
        case 'LOG':
            return action.payload;
        default:
            return log;
    }
}