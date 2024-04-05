
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
      <div className='flex flex-col lg:flex-row justify-center lg:items-start lg:mx-5'>
        <div className='lg:w-3/5 flex flex-row flex-wrap gap-6 justify-center items-stretch px-3'>
          <div onClick={()=>{
              setBandera(!bandera)
              setInfoVentana(['https://i.imgur.com/vEY5fUn.jpg'])
          }}  className='flex flex-col justify-center items-center bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <Image src={bombaAgua} width={100} height={100} alt='bombaAgua' loading='lazy'/>
            <p className='mt-3'>Motobombas</p>
            <p>Motores estacionarios</p>
            <p>Morotes briggs & stratton</p>
          </div>
          <div onClick={()=>{
              setBandera(!bandera)
              setInfoVentana(['https://i.imgur.com/CbLUOy4.jpg'])
          }}  className='flex flex-col justify-center items-center bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <Image src={soldador} width={100} height={100} alt='soldador' loading='lazy'/>
            <p className='mt-3'>Soldadoras</p>
            <p>Mascara fotosensible</p>
          </div>
          <div onClick={()=>{
              setBandera(!bandera)
              setInfoVentana(['https://i.imgur.com/fQY0jDY.jpg'])
          }}  className='flex flex-col justify-center items-center bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <Image src={cargador} width={100} height={100} alt='cargador' loading='lazy'/>
            <p className='mt-3'>Cargadores de batería</p>
            <p>Arrancadores de batería</p>
          </div>
          <div onClick={()=>{
              setBandera(!bandera)
              setInfoVentana(['https://i.imgur.com/0SyEr4t.jpg'])
          }}  className='flex flex-col justify-center items-center bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <Image src={generador} width={100} height={100} alt='generador' loading='lazy'/>
            <p className='mt-3'>Grupos electrógenos</p>
            <p>Motosoldador a nafta</p>
          </div>
        </div>
        <div className='lg:w-2/5 w-full justify-center items-center mt-20 px-5 lg:mt-0 flex flex-col'>
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