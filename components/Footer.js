import Image from 'next/image'
import React from 'react'
import logoHPampa from "../public/logo-HPampaBlanco.png"

const Footer = () => {
  return (
    <div>
        <div className="p-5 h-56 flex justify-around items-center">
            <div className="w-1/2">
                <Image className="m-3" src={logoHPampa} alt="logohpampa" width={70} height={40}/>
            </div>
            <div className="flex justify-between w-1/2">
                <div>
                    <h3 className="text-hpampa text-sm mb-3">Nuestras redes</h3>
                    <p className="text-blanco text-xs underline mb-1">Linkedin</p>
                    <p className="text-blanco text-xs underline mb-1">Instagram</p>
                    <p className="text-blanco text-xs underline mb-1">Facebook</p>
                    <p className="text-blanco text-xs underline mb-1">Whatsapp</p>
                </div>
                <div>
                    <h3 className="text-hpampa text-sm mb-3">Encontranos</h3>
                    <p className="text-blanco text-xs underline mb-1">La Muela 50196, Zaragoza, España</p>
                    <p className="text-blanco text-xs underline mb-1">+34 606 568 570</p>
                    <p className="text-blanco text-xs underline mb-1">consultas@hpampa.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
