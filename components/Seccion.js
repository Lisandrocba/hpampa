import Link from "next/link";
import React from "react";


const Seccion = () => {

  return (
    <div className="overflow-hidden">
      <div className='bg-hpampa px-5 py-28 rotate-1 scale-x-105 mb-6 mt-8'>
        <div className=" -rotate-1 overflow-hidden">
          <h5 className=" text-center text-3xl lg:text-5xl mb-20"><span className='lg:text-6xl text-white'>S</span>ectores con los que trabajamos:</h5>
          
          <div className="flex flex-col lg:flex-row flex-wrap  justify-around items-center">
            <Link className="text-white pb-5 lg:pb-0 text-2xl italic font-light transition-colors hover:underline hover:text-black duration-300 hover:-rotate-2" href="/consultoria">Consultoría</Link>
            <Link className="text-slate-100 pb-5 lg:pb-0 text-2xl italic hover:underline transition-colors hover:text-black duration-300 hover:rotate-2" href="/bebidas">Bebidas</Link>
            <Link className="text-slate-100 pb-5 lg:pb-0 text-2xl italic hover:underline transition-colors hover:text-black duration-300 hover:-rotate-2" href="/carnes">Carnes</Link>
            <Link className="text-slate-100 pb-5 lg:pb-0 text-2xl italic hover:underline transition-colors hover:text-black duration-300 hover:rotate-2" href="/legumbres">Legumbres</Link>
            <Link className="text-slate-100 pb-5 lg:pb-0 text-2xl italic hover:underline transition-colors hover:text-black duration-300 hover:-rotate-2" href="/frutossecos">Frutos Secos</Link>
            <Link className="text-slate-100 pb-5 lg:pb-0 text-2xl italic hover:underline transition-colors hover:text-black duration-300 hover:rotate-2" href="/alimentos">Alimentos Diarios</Link>
            <Link className="text-slate-100 pb-5 lg:pb-0 text-2xl italic hover:underline transition-colors hover:text-black duration-300 hover:rotate-2" href="/ferreteria">Ferreteria</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seccion;
