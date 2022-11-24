import * as api from '../api';

export const getTxn = (id) => async (dispatch)=> {
    try{
        const { data }= await api.getTxn(id);                         //fetch posts from backend or mongodb
        return data;
    } catch (error){
        console.log(error);
    }
    return 0;
    
  
}

export const getTxns = () => async (dispatch)=> {
    try{
        const { data }= await api.getTxns();                         //fetch posts from backend or mongodb
        return data;
    } catch (error){
        console.log(error);
    }
    return 0;
}