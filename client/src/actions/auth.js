import * as api from '../api';
import {AUTH} from '../constants/actiontypes';

export const signUpFunc = (form, history) => async (dispatch)=> {
    try{
        const { data }= await api.signUp(form);  
        console.log(data);                      
        const action = { type: AUTH,  data};
        dispatch(action);  
        history.push('/');                
                          
    } catch (error){
        console.log(error);
    }
  
}
export const signIn = (form, history) => async (dispatch)=> {
    try{
        const { data }= await api.signIn(form);                        
        const action = { type: AUTH, data};
        dispatch(action);  
        history.push('/');                
                          
    } catch (error){
        console.log(error);
    }
  
}

export const googleSign = (form, token, history) => async (dispatch)=> {
    try{
        const { data }= await api.googleSign(form, token);
        console.log(data);                     
        const action = { type: AUTH, data};
        dispatch(action);  
        history.push('/');                
                          
    } catch (error){
        console.log(error);
    }
  
}