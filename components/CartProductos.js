import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { GoTriangleRight } from "react-icons/go";

const CartProductos = ({img, productos =[],name,  imgW = 300, w='w-96'}) => {
  return (
    <div className={`flex flex-col justify-center items-center bg-hpampa ${w} pb-10 rounded-3xl mx-3 mb-5 shadow-sm shadow-slate-400 border-solid border-4 border-blue-200`}>
        <Image className="p-6  rounded-3xl my-3" src={img} alt='img prod' width={imgW} height={300}/>
        <h4 className='font-bold py-3 mt-3'>Productos:</h4>   
        <div className='flex flex-col items-center'>
            {
            productos.length > 0
            ?
            (
                productos.map(producto=>{
                    return(
                        <div className='flex flex-row justify-center items-center'>
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
         <Link href={`producto/${name}`} className= "py-3 my-3 px-5 bg-slate-800 text-white rounded-lg hover:bg-slate-300 hover:text-slate-800">Ver catalogo</Link>
    </div>
  )
}

export default CartProductos
