export default (txn=null, action) => { //reducers take in a state and an action and return the resulting state based on the action
    switch (action.type){
        case 'FETCH':
            txn=action.payload;
            return txn;    
        default:
            return txn;
    }
}