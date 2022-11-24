import * as api from '../api';
import {FETCH_ALL, UPDATE, DELETE, CREATE, REGISTER_POST, REGISTER_USER, REGISTER_TXN} from '../constants/actiontypes';

//Action creations are functions that create a function
export const getPosts = () => async (dispatch)=> {
    try{
        const { data }= await api.fetchPosts();                         //fetch posts from backend or mongodb
        const action = { type: FETCH_ALL, payload: data};                 //type is just a code we can distinguish the action by
        console.log(data);
        dispatch(action);                   //replacement of return which is needed cos of async
    } catch (error){
        console.log(error);
    }
  
}

export const createPost = (post) => async (dispatch) =>{            //creates a post
    try{
        const { data }= await api.createPost(post)
        dispatch({type: CREATE, payload : data});
    } catch (error){
        console.log(error);
    }
}

export const updatePost = (id,post) => async (dispatch) =>{          //creates a post
    try{
        const { data }= await api.updatePost(id,post)
        dispatch({type: UPDATE, payload : data});
    } catch (error){
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) =>{          //creates a post
    try{
        await api.deletePost(id)

        dispatch({type: DELETE, payload : id});
    } catch (error){
        console.log(error);
    }
}

export const registerPost = (id, file) => async (dispatch) =>{          //creates a post
    const user = JSON.parse(localStorage.getItem('profile'));
    console.log(file);

    try{
        const { data } = await api.registerPost(id, file, user?.token);
        console.log(data);

        dispatch({type: REGISTER_POST, payload : data.updatedPost});
        dispatch({type: REGISTER_USER, payload : data.updatedUser});
        
    } catch (error){
        console.log(error);
    }
}

export const getPost = (id) => async (dispatch)=> {
    try{
        const { data }= await api.fetchPost(id);                         //fetch posts from backend or mongodb
        console.log(data);
        dispatch({type: 'FETCH', payload : data});
        
    } catch (error){
        console.log(error);
    }
    return 0;
  
}