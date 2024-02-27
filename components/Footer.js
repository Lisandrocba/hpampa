import Image from 'next/image'
import React from 'react'
import logoHPampa from "../public/logo-HPampaBlanco.png"
import Maps from './Maps'

const Footer = () => {
  return (
    <div>
        <div className="p-5 flex flex-col sm:flex-row lg:flex-row justify-center items-center lg:items-start bg-slate-800 sm:px-10 lg:px-20">
            <div className="w-1/3 sm:my-20 lg:my-14 px-7 sm:px-5">
                <Image className="m-3" src={logoHPampa} alt="logohpampa" width={70} height={40}/>
            </div>
            <div className="flex flex-wrap gap-5 flex-row justify-center sm:items-start sm:justify-between sm:w-2/3 lg:w-2/3 py-5">
                <div>
                    <h3 className="text-hpampa lg:text-2xl mb-5">Nuestras redes</h3>
                    <p className="text-blanco sm:text-xs lg:text-lg cursor-pointer mb-1 hover:text-hpampa">Linkedin</p>
                    <p className="text-blanco sm:text-xs lg:text-lg cursor-pointer mb-1 hover:text-hpampa">Instagram</p>
                    <p className="text-blanco sm:text-xs lg:text-lg cursor-pointer mb-1 hover:text-hpampa">Facebook</p>
                    <p className="text-blanco sm:text-xs lg:text-lg cursor-pointer mb-1 hover:text-hpampa">Whatsapp</p>
                </div>
                <div>
                    <h3 className="text-hpampa lg:text-2xl mb-5">Encontranos</h3>
                   <Maps />
                   <p className='text-blanco sm:text-xs lg:text-sm mt-2 mb-1'>España, España</p>
                </div>
                <div>
                    <p className='text-hpampa lg:text-2xl mb-5'>Contacto</p>
                    <p className="text-blanco text-ssm lg:text-lg sm:text-xs mb-1">consultas@hpampa.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
