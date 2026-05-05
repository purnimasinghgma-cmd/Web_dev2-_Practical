
import { createContext, useState} from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({
children}) {

    console.log(auth);

    const login = () => {
        setAuth(true);
    };

    const logout = () => {
        setAuth(false)
    };
    return(
        <AuthContext.Provider value={{auth, login, logout}}></AuthContext.Provider>
    )
    
}