import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const CartProductos = ({img,name = '',  imgW = 300, sector}) => {
  return (
    <div className={`flex flex-col justify-between items-center w-48 lg:w-1/4 bg-hpampa pb-10 rounded-xl shadow-sm shadow-slate-400 `}>
        <Image className="p-6 my-auto object-contain rounded-3xl " src={img} alt='img prod' width={imgW} height={300} priority/> 
         <Link href={`/${sector}/${name}`} className= "lg:py-3 lg:my-3 lg:px-5 md:text-lg md:py-2 md:px-3 text-center py-2 px-3 text-xs  bg-slate-800 text-white rounded-lg hover:bg-slate-300 hover:text-slate-800">Ver mas</Link>
    </div>
  )
}

export default CartProductos
