import Image from 'next/image'
import React from 'react'
import logoHPampa from "../public/hLogo.png"

const NavBar = () => {
  return (
    <div className="flex flex-row items-center justify-between p-2">
      <div className="flex flex-row items-center ">
        <Image src={logoHPampa} alt="logohpampa" width={20} height={20}/>
        <p className="text-sm">Pampa</p>
      </div>
      <h1>Comercio Exterior</h1>
    </div>
  )
}

export default NavBar
