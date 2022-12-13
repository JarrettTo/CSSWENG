/*@brief: redux state for users
 * @params: txns, action
 * txns: state containing txns
 * action: action dispatched
 * @author: Justin To
 */
export default (txns = [], action) => {
  //reducers take in a state and an action and return the resulting state based on the action
  switch (action.type) {
    case "FETCH_TXNS":
      return action.payload;
    case "UPDATE_TXN":
      return txns.map((txn) =>
        txn._id == action.payload._id ? action.payload : txn
      );
    default:
      return txns;
  }
};
