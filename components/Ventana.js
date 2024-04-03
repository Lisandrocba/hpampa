import Image from 'next/image'
import React from 'react'
import ventana from '../public/Diseño sin título (12).jpg'
import { IoCloseCircle } from "react-icons/io5";

const Ventana = ({bandera, setBandera, infoVentana = []}) => {
 
  return (
    <div className={`flex flex-col justify-center items-center w-full top-0 mt-5 ${bandera ? 'absolute' : 'displayNone'} z-10 lg:mt-5`}>
      <div className='flex flex-row justify-center sobra-ventana mb-10'>
        <button onClick={()=>setBandera(!bandera)} className='absolute z-20 right-10 bg-black rounded-full'>
          <IoCloseCircle className='text-3xl text-red-500'/>
        </button>
        <div className='flex flex-col justify-center items-center lg:flex-row'>
        {
          infoVentana[0] ?
          infoVentana.map((img, index) =>{
            return(
              <Image key={index} width={500} height={500} src={img} alt='ventana' className='border-4 border-slate-800'/>
            )
          })
          : null
        }
       
        </div>
      </div>
    </div>
  )
}

export default Ventana
