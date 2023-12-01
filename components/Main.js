import React from 'react'

const Main = () => {
  return (
    <div className="pt-10">
        <h5 className=" text-center text-3xl lg:text-5xl lg:mb-20"><span className='lg:text-6xl text-hpampa'>N</span>uestra <span className='lg:text-6xl text-hpampa'>E</span>mpresa</h5>
        <div className="flex flex-col lg:flex-row lg:justify-around lg:pt-5 lg:mb-10">
            <p className="basis-5/12 lg:text-2xl text-slate-900 px-5 lg:pb-28 pt-16 mb-10 text-center">
                <span className='text-4xl text-hpampa'>S</span>omos una empresa conformada por profesionales de comercio exterior, 
                dedicada al desarrollo comercial de clientes, mercados y proveedores de insumos como
                así también de productos terminados.
            </p>
            <div className="basis-7/12 text-center">
                <p className="px-20 pb-28 pt-24 bg-slate-900 lg:text-2xl text-slate-200 ml-5 lg:ml-20 rounded-tl-md rounded-bl-md ">
                <span className='text-4xl text-hpampa'>E</span>stamos ubicados en la provincia de Zaragoza, España y contamos con bases operativas en Argentina, 
                    Brasil, Uruguay, Estados Unidos y China.
                </p>
            </div>
        </div>
        
      
    </div>
  )
}

export default Main
