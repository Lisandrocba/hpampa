import NavBarSectores from '@/components/NavBarSectores'
import Image from 'next/image'
import React from 'react'

const Bebidas = () => {
  return (
    <div>
      <NavBarSectores />
      <div className='flex justify-center items-center flex-wrap my-10'>
        <div className='flex flex-col justify-center items-center bg-hpampa w-1/3 pb-10 rounded-3xl mx-5 shadow-xl shadow-hpampa/50 border-solid border-4 border-blue-200'>
            <Image className='p-5 bg-white rounded-full my-3' src='https://i.imgur.com/WeUSrHN.png' alt='Bodega araujo' width={300} height={300}/>
            <h4 className='font-bold py-3 mt-3'>Productos:</h4>
            <div>
                <p>- Nucha Malbec Orgánico</p>
                <p>- Mimi</p>
                <p>- Malbec Varietal</p>
                <p>- Chardonnay Varietal</p>
                <p>- Cabernet Sauv. Cask</p>
                <p>- Tempranillo Cask</p>
            </div>
            <button className='py-3 my-3 px-5 bg-white rounded-lg'>Ver catalogo</button>
        </div>
        <div className='flex flex-col justify-center items-center bg-hpampa w-1/3 pb-10 rounded-3xl mx-5 shadow-xl shadow-hpampa/50 border-solid border-4 border-blue-200'>
            <Image className='p-5 bg-slate-800 rounded-full my-3' src='https://i.imgur.com/f46OM9T.png' alt='Bodega araujo' width={300} height={300}/>
            <h4 className='font-bold py-3 mt-3'>Productos:</h4>
            <div>
                <p>- Gin Blue Edition</p>
                <p>- Gin Red Fruits</p>
                <p>- Gin Lima & Lemongrass</p>
                <p>- Gin Cardamomo & Lemongrass</p>
                <p>- Vino Malbec 23 by Aconcagua Distillery</p>
                <p>- Vino Malbec 23 by Aconcagua Distillery</p>
            </div>
            <button className='py-3 my-3 px-5 bg-slate-800 text-white rounded-lg'>Ver catalogo</button>
        </div>
      </div>
    </div>
  )
}

export default Bebidas
