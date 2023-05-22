import React, {useContext} from 'react'
import { AdminContext } from '@/context/AdminContext'

const Botones = () => {
    let {ternarioAdmin, setTernarioAdmin} = useContext(AdminContext)

    const cambiarValor =(props)=>{
        setTernarioAdmin(props)
    }
  return (
    <div className="flex flex-col justify-center items-start m-3 w-1/3">
        <button onClick={()=>cambiarValor("categoria")}  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-hpampa to-blue-500 group-hover:from-hpampa group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
            <span className="relative w-48 text-xs px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Agregar categoria
            </span>
        </button>
        <button onClick={()=>cambiarValor("subcategoria")}  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-hpampa to-blue-500 group-hover:from-hpampa group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
            <span className="relative w-48 text-xs px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Agregar subcategoria
            </span>
        </button>
        <button onClick={()=>cambiarValor("producto")} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-hpampa to-blue-500 group-hover:from-hpampa group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
            <span className="relative w-48 text-xs px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Agregar producto
            </span>
        </button>
        <button onClick={()=>cambiarValor("lista")} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-hpampa to-blue-500 group-hover:from-hpampa group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
            <span className="relative w-48 text-xs px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Lista completa
            </span>
        </button>
    </div>
  )
}

export default Botones
