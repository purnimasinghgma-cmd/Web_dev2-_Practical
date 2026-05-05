import {usecontext} from "react"
import {Authcontext} from "../Context/ThemeContext"
export default function Nav(){
    const login = () =>{
        setAuth(true)
    };
    const logout = () =>{
        setAuth(false)
    };
}
