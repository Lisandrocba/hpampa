import Image from 'next/image';
import React from 'react';
import logoHPampa from "../public/logo-HPampa.png"
import Carrusel from './Carrusel';

const Header = () => {
  const el = React.useRef(null);

  return (
    <div >
        <div  className="flex flex-row items-center justify-between px-2 fixed top-0 left-0 right-0 z-20 carruselAnimacion">
            <div className="flex flex-row items-center ml-3">
                <Image src={logoHPampa} alt="logohpampa" width={200} height={30}/>
            </div>
            <h1 className='font-bold text-xl mr-3'>Comercio Exterior</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-full">
            <Carrusel />
          </div>
        </div>
    </div>
   
  );
}

export default Header
