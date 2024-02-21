import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const NavBar = ({scrollToComponent}) => {
    const { asPath } = useRouter();
    const [estiloNavBar, setEstiloNavBar] = useState(true)

    const scrollContacto =()=>{
      scrollToComponent()
      setEstiloNavBar(!estiloNavBar)
    }

    return (
        <div className="relative  top-0 left-0  ">
          <div className={`flex flex-row items-center justify-between px-2 mb-5 py-2 pr-5`}>
            <button className={` ${estiloNavBar ? '' : ''}`} onClick={()=>setEstiloNavBar(!estiloNavBar)}>
              <svg className="w-7 h-7  mt-2 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
            <div className={`${estiloNavBar ? '-translate-x-[100rem]' : ''} transition ease-linear delay-300 -translate-y-[5.1rem] flex flex-col items-start pl-3 h-screen text-2xl w-72 z-50 left-0 top-20 pt-8 bg-white py-3 fixed`}>
              <button className='rounded-2xl -translate-x-1 pb-5' onClick={()=>setEstiloNavBar(!estiloNavBar)}>
                <svg className="w-7 h-7  mt-2 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
              </button>
              <div className='flex flex-col  justify-between items-start h-5/6'>
                <p className='font-bold text-sm'>Servicios con los que trabajamos</p>
                <Link
                  className={
                    asPath === "/consultoria"
                      ? "py-4 text-sm lg:py-0 lg:text-sm xl:text-lg xl:font-bold lg:text-slate-800 lg:border-b-2 lg:border-solid lg:border-x-slate-900"
                      : "text-sm lg:text-sm xl:text-sm  py-4 lg:py-0  lg:text-slate-800"
                  }
                  href="/consultoria"
                >
                  - Consultoria
                </Link>
                <Link
                  className={
                    asPath === "/bebidas"
                    ? "text-sm py-4 lg:py-0 lg:text-sm xl:text-sm xl:font-bold lg:text-slate-800 lg:border-b-2 lg:border-solid lg:border-x-slate-900"
                    : "text-sm py-4 lg:py-0 lg:text-sm xl:text-sm  lg:text-slate-800"
                  }
                  href="/bebidas"
                >
                  - Bebidas
                </Link>
                <Link
                  className={
                    asPath === "/carnes"
                    ? "text-sm py-4 lg:py-0 lg:text-sm xl:text-sm xl:font-bold lg:text-slate-800 lg:border-b-2 lg:border-solid lg:border-x-slate-900"
                    : "text-sm py-4 lg:py-0 lg:text-sm xl:text-sm  lg:text-slate-800"
                  }
                  href="/carnes"
                >
                  - Carnes
                </Link>
                <Link
                  className={
                    asPath === "/legumbres"
                    ? "text-sm py-4 lg:py-0 lg:text-sm xl:text-sm xl:font-bold lg:text-slate-800 lg:border-b-2 lg:border-solid lg:border-x-slate-900"
                    : "text-sm py-4 lg:py-0 lg:text-sm xl:text-sm  lg:text-slate-800"
                  }
                  href="/legumbres"
                >
                  - Legumbres
                </Link>
                <Link
                  className={
                    asPath === "/frutossecos"
                      ?   "text-sm py-4 lg:py-0 lg:text-sm xl:text-sm xl:font-bold lg:text-slate-800 lg:border-b-2 lg:border-solid lg:border-x-slate-900"
                      : "text-sm py-4 lg:py-0 lg:text-sm xl:text-sm  lg:text-slate-800"
                  }
                  href="/frutossecos"
                >
                  - Frutos secos
                </Link>
                <Link
                  className={
                    asPath === "/alimentos"
                      ? "text-sm py-4 lg:py-0 lg:text-sm xl:text-sm xl:font-bold lg:text-slate-800 lg:border-b-2 lg:border-solid lg:border-x-slate-900"
                      : "text-sm py-4 lg:py-0 lg:text-sm xl:text-sm lg:text-slate-800"
                  }
                  href="/alimentos"
                >
                  - Alimentos
                </Link>
              </div>
              <button onClick={scrollContacto} className='font-bold text-sm h-1/6 pt-6'>
                  Contacto
              </button>
            </div>
          </div>
        </div>
      );
}

export default NavBar
