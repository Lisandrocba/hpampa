import Footer from '@/components/Footer';
import NavBarSectores from '@/components/NavBarSectores'
import Link from 'next/link'
import React from 'react'
import { VscDebugBreakpointData } from "react-icons/vsc";

const Ferreteria = () => {
  return (
    <div>
        <NavBarSectores />
        <div className='flex flex-row flex-wrap justify-center items-stretch gap-6 mb-10'>
            <Link href='/ferreteria/hogar' className='px-10 py-4 bg-hpampa sobra-item cursor-pointer rounded-sm border-t-8 border-t-lime-600'>
                <p className='text-3xl text-center mb-3'>Hogar y Jardín</p>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-lime-600'/>
                    <p className='text-center'>Motosierras</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-lime-600'/>
                    <p className='text-center'>Motoguadañas</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-lime-600'/>
                    <p className='text-center'>Hoyadora</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-lime-600'/>
                    <p className='text-center'>Cortacerco</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-lime-600'/>
                    <p className='text-center'>Bordeadora</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-lime-600'/>
                    <p className='text-center'>Cortadoras de césped</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-lime-600'/>
                    <p className='text-center'>Electrobombas</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-lime-600'/>
                    <p className='text-center'>Pulverizadores</p>
                </div>
            </Link>
            <Link href='/ferreteria/generacion' className='px-10 py-4 bg-hpampa sobra-item cursor-pointer rounded-sm border-t-8 border-t-red-600'>
                <p className='text-3xl text-center mb-3'>Generación</p>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-red-600'/>
                    <p className='text-center'>Motobombas</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-red-600'/>
                    <p className='text-center'>Motores estacionarios</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-red-600'/>
                    <p className='text-center'>Soldadoras</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-red-600'/>
                    <p className='text-center'>Cargadores de bateria</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-red-600'/>
                    <p className='text-center'>Grupos electrogenos</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-red-600'/>
                    <p className='text-center'>Motosoldadoras</p>
                </div>
               
            </Link>
            <Link href='/ferreteria/aire' className='px-10 py-4 bg-hpampa sobra-item cursor-pointer rounded-sm border-t-8 border-t-indigo-900'>
                <p className='text-3xl text-center mb-3'>Aire</p>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-indigo-900'/>
                    <p className='text-center'>Compresores de aire</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-indigo-900'/>
                    <p className='text-center'>Motores estacionarios</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-indigo-900'/>
                    <p className='text-center'>Motores estacionarios libres de aceite</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-indigo-900'/>
                    <p className='text-center'>Compresores a correa</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-indigo-900'/>
                    <p className='text-center'>Kit de aire</p>
                </div>
              
            </Link>
            <Link href='/ferreteria/movimiento' className='px-10 py-4 bg-hpampa sobra-item cursor-pointer rounded-sm border-t-8 border-t-cyan-600'>
                <p className='text-3xl text-center mb-3'>Movimiento</p>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-cyan-600'/>
                    <p className='text-center'>Aparejos eléctricos</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-cyan-600'/>
                    <p className='text-center'>Aparejos manuales a cadena</p>
                </div>
            </Link>
            <Link href='/ferreteria/herramientas' className='px-10 py-4 bg-hpampa sobra-item cursor-pointer rounded-sm border-t-8 border-t-orange'>
                <p className='text-3xl text-center mb-3'>Herramientas</p>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-orange'/>
                    <p className='text-center'>Zorra hidráulica</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-orange'/>
                    <p className='text-center'>Escaleras</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-orange'/>
                    <p className='text-center'>Pison compactador</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-orange'/>
                    <p className='text-center'>Alisadora de piso</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-orange'/>
                    <p className='text-center'>Cortadora de hormigón</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-orange'/>
                    <p className='text-center'>Vibrador de hormigón</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <VscDebugBreakpointData className='text-sm text-orange'/>
                    <p className='text-center'>Máquinas combinadas para carpuntería</p>
                </div>
            </Link>
        </div>
        <Footer />
    </div>
  )
}

export default Ferreteria
