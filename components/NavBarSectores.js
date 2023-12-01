import React, { useState } from "react";
import logoHPampa from "../public/logo-HPampa.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBarSectores = () => {
  const { asPath } = useRouter();
  const [estiloNavBar, setEstiloNavBar] = useState(true)

  return (
    <div>
      <div className="flex flex-row items-center justify-between px-2 bg-slate-100 mb-5 py-2 lg:relative pr-5">
        <div className="flex flex-row items-center ml-3">
          <Link href="/">
            <Image className="w-1/3 lg:w-1/2" src={logoHPampa} alt="logohpampa" width={200} height={30} />
          </Link>
        </div>
        <button onClick={()=>setEstiloNavBar(!estiloNavBar)}>
          <svg class="w-5 h-5 lg:hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${estiloNavBar ? 'hidden' : 'flex flex-col'} justify-center items-center w-full text-2xl left-0 top-14 bg-slate-100 py-3 absolute lg:flex lg:top-auto lg:text-lg lg:flex-row lg:static lg:justify-around  lg:w-1/2`}>
          <Link
            className={
              asPath === "/consultoria"
                ? "py-4 lg:py-0 lg:font-bold lg:text-slate-800 lg:border-b-2 lg:border-solid lg:border-x-slate-900"
                : "py-4 lg:py-0 lg:font-bold lg:text-slate-800"
            }
            href="/consultoria"
          >
            Consultoria
          </Link>
          <Link
            className={
              asPath === "/bebidas"
              ? "py-4 lg:py-0 lg:font-bold lg:text-slate-800 lg:border-b-2 lg:border-solid lg:border-x-slate-900"
              : "py-4 lg:py-0 lg:font-bold lg:text-slate-800"
            }
            href="/bebidas"
          >
            Bebidas
          </Link>
          <Link
            className={
              asPath === "/carnes"
              ? "py-4 lg:py-0 lg:font-bold lg:text-slate-800 lg:border-b-2 lg:border-solid lg:border-x-slate-900"
              : "py-4 lg:py-0 lg:font-bold lg:text-slate-800"
            }
            href="/carnes"
          >
            Carnes
          </Link>
          <Link
            className={
              asPath === "/legumbres"
              ? "py-4 lg:py-0 lg:font-bold lg:text-slate-800 lg:border-b-2 lg:border-solid lg:border-x-slate-900"
              : "py-4 lg:py-0 lg:font-bold lg:text-slate-800"
            }
            href="/legumbres"
          >
            Legumbres
          </Link>
          <Link
            className={
              asPath === "/frutossecos"
                ?   "py-4 lg:py-0 lg:font-bold lg:text-slate-800 lg:border-b-2 lg:border-solid lg:border-x-slate-900"
                : "py-4 lg:py-0 lg:font-bold lg:text-slate-800"
            }
            href="/frutossecos"
          >
            Frutos secos
          </Link>
          <Link
            className={
              asPath === "/alimentos"
                 ? "py-4 lg:py-0 lg:font-bold lg:text-slate-800 lg:border-b-2 lg:border-solid lg:border-x-slate-900"
                : "py-4 lg:py-0 lg:font-bold lg:text-slate-800"
            }
            href="/alimentos"
          >
            Alimentos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBarSectores;
