import FormControl from '@/components/FormControl'
import NavBarSectores from '@/components/NavBarSectores'
import Image from 'next/image'
import React, { useState } from 'react'
import gancho from '../../../public/gancho.png'
import Ventana from '@/components/Ventana'


const Movimiento = () => {
  const [bandera, setBandera] = useState(false)
  const [infoVentana, setInfoVentana] = useState([])
  return (
    <div>
      <NavBarSectores />
      <div className='flex flex-row justify-center items-start lg:mx-5'>
        <div className='lg:w-3/5 flex flex-row flex-wrap gap-6 justify-center items-stretch px-3'>
          <div onClick={()=>{
              setBandera(!bandera)
              setInfoVentana(['https://i.imgur.com/ntvzFG3.jpg'])
          }} className='bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <Image src={gancho} width={100} height={100} alt='gancho'/>
          </div>
        </div>
        <div className='lg:w-2/5 h-20 flex flex-col'>
          <p className="text-xl  lg:text-2xl font-bold text-slate-800 pb-8">
            Consultas sobre el producto
          </p>
          <FormControl />
        </div>
      </div>
      <Ventana setBandera={setBandera} bandera={bandera} infoVentana={infoVentana} />
    </div>
  )
}

export default Movimiento