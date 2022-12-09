/*@brief: handles API Calls to back related to attendance
* @author: Justin To and Daniel Capinpin
*/
import * as api from '../api';
import {LOG,GET_LOGS,FETCH_LOGS_BY_SEARCH} from '../constants/actiontypes';


/*@brief: log time to attendance
* @params: form
* form: details of user, txn, and show to log for
* @author: Justin To
*/
export const logTime = (form) => async (dispatch)=> {
    try{
        const { data }= await api.logTime(form);  
        console.log(data);                      
        dispatch({ type: LOG,  payload:data});                  //dispatch LOG action to affect reducer state                
                          
    } catch (error){
        console.log(error);
    }
  
}

/*@brief: get log by search query
* @params: searchQuery
* searchQuery: search query
* @author: Daniel Capinpin
*/
export const getAttBySearch = (searchQuery) => async (dispatch) => {
    try {
      console.log("getting attendance")
      const { data } = await api.fetchAttBySearch(searchQuery);
      console.log("logging attendance")
      console.log(data.data);
      console.log("logging attendance finished, starting dispatch")
      dispatch({ type: GET_LOGS,  payload:data.data});
    } catch (error) {
      console.log(error);
    }
  };

/*@brief: get all attendance logs
* @author: Justin To
*/
export const getLogs = () => async (dispatch)=> {
    try{
        const { data }= await api.getLogs();  
        console.log(data);                      
        dispatch({ type: GET_LOGS,  payload:data});                
                          
    } catch (error){
        console.log(error);
    }
  
}