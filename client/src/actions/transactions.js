/*@brief: API calls to backend related to transactions
 * @author: Justin To
 */

import * as api from "../api";
import {
  FETCH_TXN,
  FETCH_TXNS,
  UPDATE_TXN,
  FETCH_TXNS_BY_SEARCH,
} from "../constants/actiontypes";

/*@brief: gets a transaction
 * @params: id
 * id: id of transaction to be retrieved
 * @author: Justin To
 */
export const getTxn = (id) => async (dispatch) => {
  try {
    const { data } = await api.getTxn(id);
    dispatch({ type: FETCH_TXN, payload: data });
  } catch (error) {
    console.log(error);
  }
};

/*@brief: gets transactions
 * @author: Justin To
 */
export const getTxns = () => async (dispatch) => {
  try {
    const { data } = await api.getTxns(); //fetch posts from backend or mongodb
    dispatch({ type: FETCH_TXNS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

/*@brief: search for a particular transactions
 * @params: searchQuery
 * searchQuery: search query
 * @author: Daniel Capinpin
 */
export const getTxnsBySearch = (searchQuery) => async (dispatch) => {
  try {
    console.log("getting getTxns");
    const { data } = await api.fetchTxnsBySearch(searchQuery);
    console.log("logging getTxns");
    console.log(data);
    dispatch({ type: FETCH_TXNS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

/*@brief: approve a transaction
 * @params: id, post
 * id: id of transaction to approve
 * post: content of transaction
 * @author: Justin To
 */
export const approveTxn = (id, post) => async (dispatch) => {
  try {
    console.log(post);
    const { data } = await api.approveTxn(id, post);
    dispatch({ type: UPDATE_TXN, payload: data });
  } catch (error) {
    console.log(error);
  }
};

/*@brief: decline a transaction
 * @params: id
 * id: id of transaction to decline
 * @author: Justin To
 */
export const declineTxn = (id) => async (dispatch) => {
  try {
    const { data } = await api.declineTxn(id);
    dispatch({ type: UPDATE_TXN, payload: data });
  } catch (error) {
    console.log(error);
  }
};
