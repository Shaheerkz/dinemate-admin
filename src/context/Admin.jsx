import { createContext, useState } from "react";

export const LoginContext  = createContext(null)

export const LoginContextProvider = (props) =>{

    
    const [adminData, setAdminData] = useState('');
    const [userData, setuserData] = useState([]);
    const storeToken = window.localStorage.setItem('token' , adminData.token)

    const deletToken = () => window.localStorage.removeItem('token')

    return(
        <LoginContext.Provider value={{adminData , setAdminData , deletToken , userData , storeToken, setuserData}}>
        {props.children}
        </LoginContext.Provider>
    )
}