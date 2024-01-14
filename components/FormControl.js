import React from "react";

const FormControl = () => {
  return (
    <form className="w-full">
      <div className="flex-column items-center w-full">
        <input
          type="text"
          id="first_name"
          className="mb-5 bg-transparent border-t-transparent border-l-transparent border-r-transparent placeholder:text-slate-700  border-slate-800 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
          placeholder="Nombre compania"
          required
        />
        <input
          type="text"
          id="last_name"
          className="mb-5  bg-transparent border-t-transparent border-l-transparent border-r-transparent placeholder:text-slate-700 border-slate-800 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
          placeholder="Nombre de contacto"
          required
        />
        <input
          type="email"
          id="email"
          className="mb-5  bg-transparent border-t-transparent border-l-transparent border-r-transparent placeholder:text-slate-700 border-slate-800 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
          placeholder="Email"
          required
        />
        <input
          type="text"
          id="pais"
          className="mb-5  bg-transparent border-t-transparent border-l-transparent border-r-transparent placeholder:text-slate-700 border-slate-800 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
          placeholder="País"
          required
        />
        <textarea
          type="text"
          id="consulta"
          className="mb-5 bg-transparent border-t-transparent border-l-transparent border-r-transparent placeholder:text-slate-700 border-slate-800 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
          placeholder="Escriba su consulta"
          required
        />
        <button
          type="submit"
          className="text-white bg-gray-dark hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full  px-5 py-2.5 mt-5 mb-10 text-center"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default FormControl;
