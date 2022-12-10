/*@brief: redux state for a txn
* @params: txn, action
* txn: state containing txn
* action: action dispatched
* @author: Justin To
*/
export default (txn=null, action) => { //reducers take in a state and an action and return the resulting state based on the action
    switch (action.type){
        case 'FETCH_TXN':
            
            return action.payload;
        case 'UPDATE_TXN':
            return action.payload;    
        default:
            return txn;
    }
}