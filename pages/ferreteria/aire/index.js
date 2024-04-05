import FormControl from '@/components/FormControl'
import NavBarSectores from '@/components/NavBarSectores'
import Image from 'next/image'
import React, { useState } from 'react'
import compresor from '../../../public/compresor.png'
import Ventana from '@/components/Ventana'


const Aire = () => {
  const [bandera, setBandera] = useState(false)
  const [infoVentana, setInfoVentana] = useState([])

  return (
    <div>
      <NavBarSectores />
      <div className='flex flex-col lg:flex-row justify-center lg:items-start lg:mx-5'>
        <div className='lg:w-3/5 flex flex-row flex-wrap gap-6 justify-center items-center px-3'>
          <div onClick={()=>{
              setBandera(!bandera)
              setInfoVentana(['https://i.imgur.com/mY3Gjf0.jpg'])
          }}  className='flex flex-col justify-center items-center bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <Image src={compresor} width={100} height={100} alt='compresor' loading='lazy'/>
            <p>Compresor de aire</p>
          </div>
          <div onClick={()=>{
              setBandera(!bandera)
              setInfoVentana(['https://i.imgur.com/doy6qY7.jpg'])
          }}  className='flex flex-col justify-center items-center bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <Image src={compresor} width={100} height={100} alt='compresor' loading='lazy'/>
            <p>Compresor de correa</p>
          </div>
        </div>
        <div className='lg:w-2/5 w-full justify-center items-center mt-20 px-5 lg:mt-0 flex flex-col'>
          <p className="text-xl  lg:text-2xl font-bold text-slate-800 pb-8">
            Consultas sobre el producto
          </p>
          <FormControl />
        </div>
      </div>
      <Ventana setBandera={setBandera} bandera={bandera} infoVentana={infoVentana}/>
    </div>
  )
}

export default Aire