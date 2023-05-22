import React, { useState } from "react";

const initialState={
  nombre: "",
  descripcion: ""
}

const FormCategoria = () => {
  const [form, setForm] = useState(initialState)

  const handlerChange =async(e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="mb-5 mt-5">
      <p>Agregar categoria</p>
      <form className="mt-6" action="../api/admin/rutaCategoria" method="POST">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="nombre"
            id="nombre"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-hpampa peer"
            placeholder=" "
            required
            onChange={handlerChange}
          />
          <label
            htmlFor="nombre"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-hpampa peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombre categoria
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="descripcion"
            id="descripcion"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-hpampa peer"
            placeholder=" "
            onChange={handlerChange}
          />
          <label
            htmlFor="descripcion"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-hpampa peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Descripcion
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-hpampa hover:bg-hpampa focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Agregar
        </button>
      </form>
    </div>
  );
};

export default FormCategoria;
