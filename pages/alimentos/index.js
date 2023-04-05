import Image from 'next/image'
import React from 'react'
import logoHPampa from "../../public/logo-HPampaBlanco.png"
import Typed from 'typed.js';
import Link from 'next/link';

const Alimentos = () => {
const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Alimentos'],
      typeSpeed: 250,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
        <div className="bg-cover h-60 flex-column items-center justify-center bg-[url('../public/alimentos.jpg')]">
            <div className="flex flex-row items-center justify-between p-2 ">
                <Link href="/">
                    <div className="flex flex-row items-center">
                        <Image src={logoHPampa} alt="logohpampa" width={35} height={35}/>
                        <p className="text-2xl text-blanco font-bold pl-1">Pampa</p>
                    </div>
                </Link>
                <h1 className='text-blanco'>Comercio Exterior</h1>
            </div>
            <div className="flex justify-center items-center">  
                <span /* style={{textShadow: "2px 2px 1px #cbd5e1"}} */ className="font-bold font-sans text-5xl tracking-wide text-blanco" ref={el} />
            </div>
        </div>
    </div>
  )
}

export default Alimentos
