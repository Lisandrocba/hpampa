import React from 'react'

const Contacto = () => {
  return (
    <div className="mr-10 ml-10 mt-5 mb-5">
        <h3 className="text-2xl lg:text-5xl pt-3 pb-7 mb-3 mt-10">Contactanos:</h3>
        <form>
            <div className="flex-col justify-center items-center">
                <input type="text" id="first_name" className="mb-5 border-t-transparent border-l-transparent border-r-transparent border-gray-300 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5" placeholder="Nombre compania" required/>
                <input type="text" id="last_name" className="mb-5 border-t-transparent border-l-transparent border-r-transparent border-gray-300 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5" placeholder="Nombre de contacto" required/>
                <input type="email" id="email" className="mb-5 border-t-transparent border-l-transparent border-r-transparent border-gray-300 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5" placeholder="Email" required/>
                <div className='lg:flex lg:justify-center lg:items-center'>
                  <button type="submit" class="py-3 my-3 px-5 bg-slate-800 text-white rounded-lg hover:bg-slate-600 hover:text-white w-full lg:inline lg:w-1/3">Enviar</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Contacto
