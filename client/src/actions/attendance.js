import * as api from '../api';
import {LOG,GET_LOGS} from '../constants/actiontypes';
export const logTime = (form) => async (dispatch)=> {
    try{
        const { data }= await api.logTime(form);  
        console.log(data);                      
        dispatch({ type: LOG,  payload:data});                
                          
    } catch (error){
        console.log(error);
    }
  
}
export const getAttBySearch = (searchQuery) => async (dispatch) => {
    try {
      console.log("getting attendance")
      const { data } = await api.fetchAttBySearch(searchQuery);
      console.log("logging attendance")
      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
  };
export const getLogs = () => async (dispatch)=> {
    try{
        const { data }= await api.getLogs();  
        console.log(data);                      
        dispatch({ type: GET_LOGS,  payload:data});                
                          
    } catch (error){
        console.log(error);
    }
  
}