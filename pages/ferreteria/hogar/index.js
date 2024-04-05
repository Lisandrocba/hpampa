import FormControl from '@/components/FormControl'
import NavBarSectores from '@/components/NavBarSectores'
import Image from 'next/image'
import React, { useState } from 'react'
import tractor from '../../../public/tractor.png'
import cortadora from '../../../public/segadora.png'
import desmalezadora from '../../../public/desbrozadora.png'
import pulverizador from '../../../public/pulverizador.png'
import { GiChainsaw } from "react-icons/gi";
import { FaPersonDigging } from "react-icons/fa6";
import podadora from '../../../public/2713420.png'
import pozo from '../../../public/763591.png'
import bombaagua from '../../../public/5735563.png'
import Ventana from '@/components/Ventana'

const Hogar = () => {
  const [bandera, setBandera] = useState(false)
  const [infoVentana, setInfoVentana] = useState([])
  
  return (
    <div className='relative'>
      <NavBarSectores />
      <div className='flex flex-col lg:flex-row justify-center lg:items-start lg:mx-5 mb-5'>
        <div className='lg:w-3/5 flex flex-row flex-wrap gap-6 justify-center items-stretch px-3'>
          <div onClick={()=>{
              setBandera(!bandera)
              setInfoVentana(['https://i.imgur.com/LgvjgIW.jpg'])
          }} className='flex flex-col justify-center items-center bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <Image src={tractor} width={100} height={100} alt='tractor' loading='lazy'/>
            <p className='mt-3'>Minitractores</p>
          </div>
          <div onClick={()=>{
              setBandera(!bandera)
              setInfoVentana(['https://i.imgur.com/op21dqF.jpg'])
          }} className='flex flex-col justify-center items-center bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <Image src={cortadora} width={100} height={100} alt='cortadora' loading='lazy'/>
            <p className='mt-3'>Cortadora de césped</p>
            <p>eléctricas</p>
          </div>
          <div onClick={()=>{
              setBandera(!bandera)
              setInfoVentana(['https://i.imgur.com/K6SvN0K.jpg', 'https://i.imgur.com/xsc2g9p.jpg'])
          }} className='flex flex-col justify-center items-center bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <Image src={cortadora} width={100} height={100} alt='cortadora' loading='lazy'/>
            <p className='mt-3'>Cortadora de césped</p>
            <p>a nafta</p>
          </div>
          <div onClick={()=>{
              setBandera(!bandera)
              setInfoVentana(['https://i.imgur.com/oqyg4Yp.jpg'])
          }} className='flex flex-col justify-center items-center bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <Image src={desmalezadora} width={100} height={100} alt='desmalezadora' loading='lazy'/>
            <p className='mt-3'>Bordeadoras</p>
          </div>
          <div onClick={()=>{
              setBandera(!bandera)
              setInfoVentana(['https://i.imgur.com/Aprd5eN.jpg', 'https://i.imgur.com/4BpW3ya.jpg'])
          }} className='flex flex-col justify-center items-center bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <Image src={podadora} width={100} height={100} alt='desmalezadora' loading='lazy'/>
            <p className='mt-3'>Motoguadañas</p>
            <p>Motorierras</p>
            <p>Hoyadora</p>
            <p>Motor fuera de borda</p>
            <p>Cortacerco</p>
          </div>
          <div onClick={()=>{
              setBandera(!bandera)
              setInfoVentana(['https://i.imgur.com/k1eCHLo.jpg'])
          }} className='flex flex-col justify-center items-center bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <Image src={pulverizador} width={100} height={100} alt='pulverizador' loading='lazy'/>
            <p className='mt-3'>Pulverizadores</p>
          </div>
          <div onClick={()=>{
              setBandera(!bandera)
              setInfoVentana(['https://i.imgur.com/3uKxJ8g.jpg', 'https://i.imgur.com/xiqoTle.jpg'])
          }} className='flex flex-col justify-center items-center bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer efecto-sombra'>
            <Image src={bombaagua} width={100} height={100} alt='bombaagua' loading='lazy'/>
            <p className='mt-3'>Electrobombas</p>
            <p>Presurizadora</p>
            <p>Electrobombas sumergibles</p>
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

export default Hogar
