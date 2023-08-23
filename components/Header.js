import Image from 'next/image';
import React from 'react';
import Typed from 'typed.js';
import logoHPampa from "../public/logo-HPampaBlanco.png"
import Carrusel from './Carrusel';

const Header = () => {
  const el = React.useRef(null);

  return (
    <div className="bg-zinc-800 ">
        <div className="flex flex-row items-center justify-between p-2 bg-gradient-to-t from-zinc-800 to-zinc-900">
            <div className="flex flex-row items-center ml-3">
                <Image src={logoHPampa} alt="logohpampa" width={25} height={30}/>
                <p className="text-xl text-blanco font-bold pl-1">Pampa</p>
            </div>
            <h1 className='text-blanco mr-3'>Comercio Exterior</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-5/6">
            <Carrusel />
          </div>
        </div>
    </div>
   
  );
}

export default Header
