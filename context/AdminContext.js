import { createContext, useState } from "react";

export const AdminContext = createContext()

export const AdminProvider = ({children}) =>{
    const [ternarioAdmin, setTernarioAdmin] = useState("lista")
    

    return <AdminContext.Provider value={{ternarioAdmin, setTernarioAdmin}}>{children}</AdminContext.Provider>
}