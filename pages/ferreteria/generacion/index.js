
import FormControl from '@/components/FormControl'
import NavBarSectores from '@/components/NavBarSectores'
import Image from 'next/image'
import React, { useState } from 'react'
import bombaAgua from '../../../public/bomba-de-agua.png'
import soldador from '../../../public/soldador.png'
import cargador from '../../../public/cargando.png'
import generador from '../../../public/generador-electrico.png'
import Ventana from '@/components/Ventana'

const Generacion = () => {
  const [bandera, setBandera] = useState(false)
  const [infoVentana, setInfoVentana] = useState([])

  return (
    <div>
      <NavBarSectores />
      <div className='flex flex-row justify-center items-start lg:mx-5'>
        <div className='lg:w-3/5 flex flex-row flex-wrap gap-6 justify-center items-stretch px-3'>
          <div onClick={()=>{
              setBandera(!bandera)
              setInfoVentana(['https://i.imgur.com/vEY5fUn.jpg'])
          }}  className='bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <Image src={bombaAgua} width={100} height={100} alt='bombaAgua'/>
          </div>
          <div onClick={()=>{
              setBandera(!bandera)
              setInfoVentana(['https://i.imgur.com/CbLUOy4.jpg'])
          }}  className='bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <Image src={soldador} width={100} height={100} alt='soldador'/>
          </div>
          <div onClick={()=>{
              setBandera(!bandera)
              setInfoVentana(['https://i.imgur.com/fQY0jDY.jpg'])
          }}  className='bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <Image src={cargador} width={100} height={100} alt='cargador'/>
          </div>
          <div onClick={()=>{
              setBandera(!bandera)
              setInfoVentana(['https://i.imgur.com/0SyEr4t.jpg'])
          }}  className='bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <Image src={generador} width={100} height={100} alt='generador'/>
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

export default Generacion