import FormControl from '@/components/FormControl'
import NavBarSectores from '@/components/NavBarSectores'
import Image from 'next/image'
import React from 'react'
import { FaHelmetSafety } from "react-icons/fa6";
import { PiLadderBold } from "react-icons/pi";
import sierra from '../../../public/sierra.png'
import carpinteria from '../../../public/carpinteria.png'

const Herramientas = () => {
  return (
    <div>
      <NavBarSectores />
      <div className='flex flex-row justify-center items-start lg:mx-5'>
        <div className='lg:w-3/5 flex flex-row flex-wrap gap-6 justify-center items-stretch px-3'>
          <div className='bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <FaHelmetSafety className='text-8xl'/>
          </div>
          <div className='bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <PiLadderBold className='text-8xl'/>
          </div>
          <div className='bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <Image src={sierra} width={100} height={100} alt='sierra'/>
          </div>
          <div className='bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <Image src={carpinteria} width={100} height={100} alt='carpinteria'/>
          </div>
        </div>
        <div className='lg:w-2/5 h-20 flex flex-col'>
          <p className="text-xl  lg:text-2xl font-bold text-slate-800 pb-8">
            Consultas sobre el producto
          </p>
          <FormControl />
        </div>
      </div>
    </div>
  )
}

export default Herramientas