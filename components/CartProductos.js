import Image from 'next/image';
import React from 'react'
import { GoTriangleRight } from "react-icons/go";

const CartProductos = ({img, productos =[],  imgW = 300, w='w-96'}) => {
  return (
    <div className={`flex flex-col justify-center items-center bg-hpampa ${w} pb-10 rounded-3xl mx-3 mb-5 shadow-xl shadow-hpampa/50 border-solid border-4 border-blue-200`}>
        <Image className="p-6  rounded-3xl my-3" src={img} alt='img prod' width={imgW} height={300}/>
        <h4 className='font-bold py-3 mt-3'>Productos:</h4>   
        <div className='flex flex-col items-start'>
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
         <button className= "py-3 my-3 px-5 bg-slate-800 text-white rounded-lg">Ver catalogo</button>
    </div>
  )
}

export default CartProductos
