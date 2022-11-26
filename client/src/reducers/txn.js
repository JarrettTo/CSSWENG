export default (txn=null, action) => { //reducers take in a state and an action and return the resulting state based on the action
    switch (action.type){
        case 'FETCH_TXN':
            
            return action.payload;    
        default:
            return txn;
    }
}