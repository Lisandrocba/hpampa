
import FormControl from '@/components/FormControl'
import NavBarSectores from '@/components/NavBarSectores'
import Image from 'next/image'
import React from 'react'
import tractor from '../../../public/tractor.png'
import cortadora from '../../../public/segadora.png'
import desmalezadora from '../../../public/desbrozadora.png'
import pulverizador from '../../../public/pulverizador.png'
import { GiChainsaw } from "react-icons/gi";
import { FaPersonDigging } from "react-icons/fa6";
import podadora from '../../../public/2713420.png'
import pozo from '../../../public/763591.png'
import bombaagua from '../../../public/5735563.png'


const Hogar = () => {
  return (
    <div>
      <NavBarSectores />
      <div className='flex flex-row justify-center items-start lg:mx-5'>
        <div className='lg:w-3/5 flex flex-row flex-wrap gap-6 justify-center items-stretch px-3'>
          <div className='bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer'>
            <Image src={tractor} width={100} height={100} alt='tractor'/>
          </div>
          <div className='bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer'>
            <Image src={cortadora} width={100} height={100} alt='cortadora'/>
          </div>
          <div className='bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer'>
            <Image src={desmalezadora} width={100} height={100} alt='desmalezadora'/>
          </div>
          <div className='bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer'>
            <Image src={pulverizador} width={100} height={100} alt='pulverizador'/>
          </div>
          <div className='bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer'>
            <GiChainsaw className='text-8xl'/>
          </div>
          <div className='bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer'>
            <FaPersonDigging className='text-8xl' />
          </div>
          <div className='bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer'>
            <Image src={podadora} width={100} height={100} alt='podadora'/>
          </div>
          <div className='bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer'>
            <Image src={pozo} width={100} height={100} alt='pozo'/>
          </div>
          <div className='bg-hpampa p-3 rounded-2xl border-4 border-solid border-slate-700 cursor-pointer'>
            <Image src={bombaagua} width={100} height={100} alt='bombaagua'/>
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

export default Hogar
