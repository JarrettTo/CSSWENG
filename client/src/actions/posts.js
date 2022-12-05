import * as api from '../api';
import {FETCH_ALL, FETCH_BY_SEARCH, FETCH_BY_REGISTERED, UPDATE, DELETE, CREATE, REGISTER_POST, REGISTER_USER, REGISTER_TXN} from '../constants/actiontypes';

//Action creations are functions that create a function
export const getRegisteredPosts = (regPosts) => async (dispatch)=> {
    console.log("logging action registered posts");
    console.log(regPosts);
    try{
        const { data : { data }} = await api.fetchPostsbyReg(regPosts);
        console.log(data);
        //const action = { type: FETCH_BY_REGISTERED, payload: data};
        //dispatch(action);
    } catch(error)
    {
        console.log("logging error");
        console.log(error);
    }
    
  };

export const getPosts = (page) => async (dispatch)=> {
    try{
        const { data }= await api.fetchPosts(page);                         //fetch posts from backend or mongodb
        const action = { type: FETCH_ALL, payload: data};                 //type is just a code we can distinguish the action by
        //console.log(data);
        dispatch(action);                   //replacement of return which is needed cos of async
    } catch (error){
        console.log(error);
    }
  };

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
      
      const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
      console.log(data);
      dispatch({ type: FETCH_BY_SEARCH, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

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

export const registerPost = (id, form) => async (dispatch) =>{          //creates a post
    const user = JSON.parse(localStorage.getItem('profile'));
    console.log(form);

    try{
        const { data } = await api.registerPost(id, form, user?.token);
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