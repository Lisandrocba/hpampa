import React from 'react'

const Contacto = () => {
  return (
    <div className="mr-10 ml-10 mt-5 mb-5">
        <h3 className="text-xl pt-3 pb-7">Contactanos</h3>
        <form>
            <div className="flex-column items-center">
                <input type="text" id="first_name" className="mb-5 border-t-transparent border-l-transparent border-r-transparent border-gray-300 text-gray-900 text-sm border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5" placeholder="Nombre compania" required/>
                <input type="text" id="last_name" className="mb-5 border-t-transparent border-l-transparent border-r-transparent border-gray-300 text-gray-900 text-sm border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5" placeholder="Nombre de contacto" required/>
                <input type="email" id="email" className="mb-5 border-t-transparent border-l-transparent border-r-transparent border-gray-300 text-gray-900 text-sm border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5" placeholder="Email" required/>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Enviar</button>
            </div>
        </form>
    </div>
  )
}

export default Contacto
