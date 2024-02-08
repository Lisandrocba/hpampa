import Image from 'next/image';
import React from 'react';
import logoHPampa from "../public/Logo HPampa International Business (2).png"
import Carrusel from './Carrusel';
import NavBar from './NavBar';

const Header = ({scrollToComponent}) => {
  const el = React.useRef(null);
  return (
    <div >
        <div  className="flex flex-row items-center justify-between w-screen  lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-30 carruselAnimacion">
            <div className="flex flex-row justify-start items-center w-1/3 ">
              <NavBar scrollToComponent={scrollToComponent}/>
            </div>
            
            <div className="flex flex-row justify-center items-center ml-3 w-1/3">
                <Image src={logoHPampa} alt="logohpampa" width={200} height={30}/>
            </div>
           
            <h1 className='lg:font-bold text-end lg:text-xl w-1/3 pr-5'>Comercio Exterior</h1>
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
