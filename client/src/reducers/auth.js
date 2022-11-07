export default (state= { authData: null }, action) => { //reducers take in a state and an action and return the resulting state based on the action
    switch (action.type){
        case 'AUTH':
            localStorage.setItem('profile',JSON.stringify({...action?.data})); //localStorage is where u store variables that u want to keep even when the page reloads. it's basically a storage for the session
            return { ...state, authData: action?.data};    
        case 'LOGOUT':
            localStorage.clear();
            return { ...state,  authData: null };    
        default:
            return state;
    }
    return state;
}