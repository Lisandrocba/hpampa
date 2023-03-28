import Image from 'next/image';
import React from 'react';
import Typed from 'typed.js';
import logoHPampa from "../public/hLogo.png"

const Header = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Importaciones', 'Exportaciones', 'Acesoramiento'],
      typeSpeed: 200,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-cover bg-[url('../public/conten2.jpg')]">
        <div className="flex flex-row items-center justify-between p-2 ">
            <div className="flex flex-row items-center">
                <Image src={logoHPampa} alt="logohpampa" width={40} height={40}/>
                <p className="text-2xl text-blanco font-bold">Pampa</p>
            </div>
            <h1 className='text-blanco'>Comercio Exterior</h1>
        </div>
        <div className="h-52 flex justify-center items-center">  
            <span style={{textShadow: "2px 2px 1px #cbd5e1"}} className="font-bold font-sans text-7xl tracking-wide text-blanco" ref={el} />
        </div>
    </div>
   
  );
}

export default Header
