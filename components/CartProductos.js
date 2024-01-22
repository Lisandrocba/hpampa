import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { GoTriangleRight } from "react-icons/go";

const CartProductos = ({img, productos =[],name,  imgW = 300, w='w-96', sector}) => {
  return (
    <div className={`flex flex-col justify-between items-center bg-hpampa ${w} lg:h-screen pb-10 rounded-3xl mx-3 mb-5 shadow-sm shadow-slate-400 `}>
        <Image className="p-6 w-64 h-64 object-contain rounded-3xl " src={img} alt='img prod' width={imgW} height={300} priority/>
        <h4 className='font-bold py-3'>Productos:</h4>   
        <div className='flex flex-col items-center'>
            {
            productos.length > 0
            ?
            (
                productos.map(producto=>{
                    return(
                        <div key={Math.random()} className='flex flex-row justify-center items-center'>
                            <GoTriangleRight />
                            <p>{producto}</p>
                        </div>
                    )
                })
            )
            :
            (
                <div className='flex flex-row justify-center items-center'>
                            <GoTriangleRight />
                            <p>No hay productos para mostrar</p>
                        </div>
            )
            }
        </div>    
         <Link href={`/${sector}/${name}`} className= "py-3 my-3 px-5 bg-slate-800 text-white rounded-lg hover:bg-slate-300 hover:text-slate-800">Ver mas</Link>
    </div>
  )
}

export default CartProductos
