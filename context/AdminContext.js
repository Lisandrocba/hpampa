import { createContext, useState } from "react";

export const AdminContext = createContext()

export const AdminProvider = ({children}) =>{
    const [ternarioAdmin, setTernarioAdmin] = useState("lista")
    const [sectorSeleccionado, setSectorSeleccionado] = useState()
    

    return <AdminContext.Provider value={{ternarioAdmin, setTernarioAdmin,sectorSeleccionado, setSectorSeleccionado}}>{children}</AdminContext.Provider>
}