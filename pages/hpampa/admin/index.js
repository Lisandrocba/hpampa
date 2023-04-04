import Image from 'next/image'
import React from 'react'
import logoHPampa from "../../../public/logo-HPampaCeleste.png"

const index = () => {
  return (
    <div className="flex flex-row bg-slate-100 justify-around items-center w-full border-b-4 border-cyan-500 p-2">
         <Image src={logoHPampa} alt="logohpampa" width={40} height={40}/>
        <p className="text-xl text-cyan-500 underline">Administracion de servicios</p>
    </div>
  )
}

export default index
