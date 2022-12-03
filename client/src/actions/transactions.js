import * as api from '../api';
import {FETCH_TXN, FETCH_TXNS,UPDATE_TXN} from '../constants/actiontypes';
export const getTxn = (id) => async (dispatch)=> {
    try{
        const { data }= await api.getTxn(id);                         //fetch posts from backend or mongodb
        dispatch({type: FETCH_TXN, payload : data});

    } catch (error){
        console.log(error);
    }

  
}

export const getTxns = () => async (dispatch)=> {
    try{
        const { data }= await api.getTxns();                         //fetch posts from backend or mongodb
        dispatch({type: FETCH_TXNS, payload : data});
    } catch (error){
        console.log(error);
    }

}

export const approveTxn = (id, post) => async (dispatch)=> {
    try{
        console.log(post);
        const { data }= await api.approveTxn(id, post);
                             //fetch posts from backend or mongodb
        dispatch({type: UPDATE_TXN, payload : data});
    } catch (error){
        console.log(error);
    }

}

export const declineTxn = (id) => async (dispatch)=> {
    try{
        const { data }= await api.declineTxn(id);                         //fetch posts from backend or mongodb
        dispatch({type: UPDATE_TXN, payload : data});
    } catch (error){
        console.log(error);
    }

}