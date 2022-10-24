import * as api from '../api';
//Action creations are functions that create a function
export const getPosts = () => async (dispatch)=> {
    try{
        const { data }= await api.fetchPosts(); //fetch posts from backend or mongodb
        const action = { type: 'FETCH_ALL', payload: data};  //type is just a code we can distinguish the action by
        dispatch(action);       //replacement of return which is needed cos of async
    } catch (error){
        console.log(error);
    }
  
}

export const createPost = (post) => async (dispatch) =>{    //creates a post
    try{
        const { data }= await api.createPost(post)
        dispatch({type: 'CREATE', payload : data});
    } catch (error){
        console.log(error);
    }
}