import React, { useEffect } from 'react'
import Botones from './Botones'
import { AdminContext } from '@/context/AdminContext'
import { useContext } from 'react'
import ListaServicios from './ListaServicios'
import FormCategoria from './FormCategoria'
import FormSubcategoria from './FormSubcategoria'
import FormProducto from './FormProducto'

const HomeAdmin = (props) => {
  const {categorias, subcategorias, productos} = props
  const {ternarioAdmin, setTernarioAdmin} = useContext(AdminContext)
  
  useEffect(()=>{
    ternarioAdmin
  },[ternarioAdmin])

  return (
        <div className="flex flex-row justify-center items-start w-full">
            <Botones className="w-1/3"/>
            <div className="w-2/3 mr-4">
              {ternarioAdmin==="lista" ?  <ListaServicios categorias= {categorias} subcategorias={subcategorias} productos={productos}/> : null}
              {ternarioAdmin==="categoria" ?  <FormCategoria /> : null}
              {ternarioAdmin==="subcategoria" ?  <FormSubcategoria  categorias= {categorias}/> : null}
              {ternarioAdmin==="producto" ?  <FormProducto  subcategorias={subcategorias}/> : null}
            </div>
        </div>
  )
}

export default HomeAdmin
