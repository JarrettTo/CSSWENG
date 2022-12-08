export default (logs=[], action) => { //reducers take in a state and an action and return the resulting state based on the action
    switch (action.type){
        case 'GET_LOGS':
            return action.payload;
        case 'FETCH_LOGS_BY_SEARCH':
            return action.payload;
        default:
            return logs;
    }
}