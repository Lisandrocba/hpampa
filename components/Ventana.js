import Image from 'next/image'
import React from 'react'
import ventana from '../public/Diseño sin título (12).jpg'
import { IoCloseCircle } from "react-icons/io5";

const Ventana = ({bandera, setBandera}) => {
  return (
    <div className={`flex flex-col justify-center items-center w-full h-full ${bandera ? 'absolute' : 'displayNone'} z-10 top-0 mt-28`}>
      <button onClick={()=>setBandera(!bandera)} className='absolute z-20 -top-28 translate-x-60 bg-black rounded-full'>
        <IoCloseCircle className='text-3xl text-red-500'/>
      </button>
      <Image width={500} height={500} src={ventana} alt='ventana' className='border-4 border-slate-800 sobra-ventana mb-10'/>
    </div>
  )
}

export default Ventana
