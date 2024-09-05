import { createContext, useState } from "react";

export const ToggleContext = createContext(null)


export const ToggleProvider = (props) =>{

    const [toggle , setToggle] = useState(false)
    return(
        <ToggleContext.Provider value={{toggle , setToggle}}>
         {props.children}
        </ToggleContext.Provider>
    )
}