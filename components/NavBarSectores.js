import React from "react";
import logoHPampa from "../public/logo-HPampa.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBarSectores = () => {
  const { asPath } = useRouter();

  return (
    <div>
      <div className="flex flex-row items-center justify-between px-2 bg-slate-100 mb-5 py-2">
        <div className="flex flex-row items-center ml-3">
          <Image src={logoHPampa} alt="logohpampa" width={200} height={30} />
        </div>
        <div className="flex flex-row justify-around w-1/2">
          <Link
            className={
              asPath === "/consultoria"
                ? "font-bold text-slate-800 border-b-2 border-solid border-x-slate-900"
                : "font-bold text-slate-800"
            }
            href="/consultoria"
          >
            Consultoria
          </Link>
          <Link
            className={
              asPath === "/bebidas"
                ? "font-bold text-slate-800 border-b-2 border-solid border-x-slate-900"
                : "font-bold text-slate-800"
            }
            href="/bebidas"
          >
            Bebidas
          </Link>
          <Link
            className={
              asPath === "/carnes"
                ? "font-bold text-slate-800 border-b-2 border-solid border-x-slate-900"
                : "font-bold text-slate-800"
            }
            href="/carnes"
          >
            Carnes
          </Link>
          <Link
            className={
              asPath === "/legumbres"
                ? "font-bold text-slate-800 border-b-2 border-solid border-x-slate-900"
                : "font-bold text-slate-800"
            }
            href="/legumbres"
          >
            Legumbres
          </Link>
          <Link
            className={
              asPath === "/frutossecos"
                ? "font-bold text-slate-800 border-b-2 border-solid border-x-slate-900"
                : "font-bold text-slate-800"
            }
            href="/frutossecos"
          >
            Frutos secos
          </Link>
          <Link
            className={
              asPath === "/alimentos"
                ? "font-bold text-slate-800 border-b-2 border-solid border-x-slate-900"
                : "font-bold text-slate-800"
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
