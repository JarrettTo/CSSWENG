export default (state= { authData: null }, action) => { //reducers take in a state and an action and return the resulting state based on the action
    switch (action.type){
        case 'AUTH':
            
            localStorage.setItem('profile',JSON.stringify({...action?.data})); //localStorage is where u store variables that u want to keep even when the page reloads. it's basically a storage for the session
            return { ...state, authData: action?.data};    
        case 'LOGOUT':
            localStorage.clear();
            return { ...state,  authData: null }; 
        case 'REGISTER_USER':
            
            localStorage.setItem('profile',JSON.stringify( {...action?.payload}));  
            return { ...state, authData: action?.payload}; 
        case 'UPDATE_USER':
            const old=localStorage.getItem('profile')
            localStorage.setItem('profile',JSON.stringify({result: action?.data, token:old.token}))
            return { ...state, authData: {...authData, result: action?.data}};
            
        default:
            return state;
    }
    return state;
}