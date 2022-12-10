/*@brief: redux state for a log
* @params: state, action
* log: state containing log
* action: action dispatched
* @author: Justin To
*/
export default (log=null, action) => { //reducers take in a state and an action and return the resulting state based on the action
    switch (action.type){
        case 'LOG':
            return action.payload;
        default:
            return log;
    }
}