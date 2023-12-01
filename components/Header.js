import Image from 'next/image';
import React from 'react';
import logoHPampa from "../public/logo-HPampa.png"
import Carrusel from './Carrusel';

const Header = () => {
  const el = React.useRef(null);

  return (
    <div >
        <div  className="flex flex-row items-center justify-between px-2 py-3 lg:px-2 lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-30 carruselAnimacion">
            <div className="flex flex-row items-center ml-3">
                <Image src={logoHPampa} className='w-2/3' alt="logohpampa" width={200} height={30}/>
            </div>
            <h1 className='lg:font-bold lg:text-xl lg:mr-3 w-2/3 text-end'>Comercio Exterior</h1>
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
