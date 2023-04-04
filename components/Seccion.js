import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import alimentos from "../public/alimentos-organicos.png"
import agro from "../public/sprout.png"
import auto from "../public/coche.png"
import outdor from "../public/camping.png"
import herramientas from "../public/herramientas-para-reparar.png" 
import martillo from "../public/martillo.png"

const Seccion = () => {
  return (
    <div className="bg-hpampa p-5 mt-5 pb-7">
      <h3 className="text-xl text-blanco p-3 pb-7">Sectores con los que trabajamos</h3>
      <div className="flex flex-row justify-around items-center">
        <Link href="/alimentos">
            <div className="grid justify-items-center bg-blanco rounded-full p-4 w-24 h-24 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">
                <Image width={40} height={40} src={alimentos} />
                <h2 className="text-ssm pt-1">Alimentos</h2>
            </div>
        </Link>
        <Link href="/">
            <div className="grid justify-items-center bg-blanco rounded-full p-4  w-24 h-24 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">
                <Image width={40} height={40} src={agro} />
                <h2 className="text-ssm pt-1">Agroindustria</h2>
            </div>
        </Link>
        <Link href="/">
            <div className="grid justify-items-center bg-blanco rounded-full p-4  w-24 h-24 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">
                <Image width={40} height={40} src={auto} /> 
                <h2 className="text-ssm pt-1">Autopartes</h2>   
            </div>
        </Link>
        <Link href="/">
            <div className="grid justify-items-center bg-blanco rounded-full p-4  w-24 h-24 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">
                <Image width={40} height={40} src={outdor} />
                <h2 className="text-ssm pt-1">Outdoor</h2> 
            </div>
        </Link>
        <Link href="/">
            <div className="grid justify-items-center bg-blanco rounded-full p-4  w-24 h-24 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">
                <Image width={40} height={40} src={herramientas} />
                <h2 className="text-ssm pt-1">Ferreteria</h2> 
            </div>
        </Link>
        <Link href="/">
            <div className="grid justify-items-center bg-blanco rounded-full p-4  w-24 h-24 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">
                <Image width={40} height={40} src={martillo} />
                <h2 className="text-ssm pt-1">Maquinaria</h2> 
            </div>
        </Link>
      </div>
    </div>
  )
}

export default Seccion
