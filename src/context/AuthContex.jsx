import { createContext, useContext, useEffect, useReducer } from 'react'

const initailState = {
    user: null,
    role: null,
    token: null
}

export const authContext = createContext(initailState);

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                role: null,
                token: null
            };
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload.user,
                token: action.payload.token,
                role: action.payload.role,
            };
        case 'LOGIN_OUT':
            return {
                user: null,
                role: null,
                token: null
            }
        default:
            return state;
    }
}

export const AuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(authReducer,initailState)

    return <authContext.Provider value={{user:state.user,token:state.token,role:state.role,dispatch}}>
        {children}
    </authContext.Provider>
}