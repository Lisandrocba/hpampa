import Image from 'next/image'
import React from 'react'
import logoHPampa from "../../../public/logo-HPampaCeleste.png"
import HomeAdmin from '@/components/admin/Home'
import { categoriasServices, subcategoriasServices } from '@/services/services'

const index = (props) => {
  let categorias = props.categorias
  let subcategorias = props.subcategorias
  return (
    <div>
      <div className="flex flex-row bg-slate-100 justify-around items-center w-full border-b-4 border-hpampa p-2">
          <Image src={logoHPampa} alt="logohpampa" width={40} height={40}/>
          <p className="text-xl text-hpampa underline">Administracion de servicios</p>
      </div>
      <div>
        <HomeAdmin categorias={categorias} subcategorias={subcategorias}/>
      </div>
    </div>
  )
}

export default index

export async function getServerSideProps(){
  try{
    const categorias = await categoriasServices.getAll()
    const categoria = categorias.map(cat=>{
      return cat.nombre
    })
    const subcategorias = await subcategoriasServices.getAll()
    const subcategoria = subcategorias.map(cat=>{
      return cat.nombre
    })
    return{
      props: {
        categorias : categoria,
        subcategorias: subcategoria
      }
    }
  }catch(e){
    console.log(e)
  }
}
