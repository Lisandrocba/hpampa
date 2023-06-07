import Image from "next/image";
import React, { useState } from "react";

const initialState = {
  nombreEmpresa: "",
  nombreLinea: "",
  descripcion: "",
  img: {},
};

const FormProducto = (subcategorias) => {
  const [form, setForm] = useState(initialState);
  const [image, setImage] = useState(null);
  const [imageI, setImageI] = useState({});
  let subcategoria = [subcategorias.subcategorias];

  const handlerChange = async (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlerImage = (e) => {
    e.preventDefault()
    const newfile = e.target.files[0];
    setForm({
      ...form,
      [e.target.name]: e.target.files[0],
    });
    const fileRead = new FileReader();
    fileRead.onload = function (e) {
      setImage(e.target.result);
    };
    fileRead.readAsDataURL(newfile);
  };

  return (
    <div className="mb-5 mt-5">
      <p>Agregar producto</p>
      <form className="mt-6" action="../api/admin/rutaProducto" method="POST">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="nombreEmpresa"
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
            Nombre empresa
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="nombreLinea"
            id="descripcion"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-hpampa peer"
            placeholder=" "
            onChange={handlerChange}
          />
          <label
            htmlFor="descripcion"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-hpampa peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombre linea
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="descripcion"
            id="descripcion"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-hpampa peer"
            placeholder=" "
            onChange={handlerChange}
          />
          <label
            htmlFor="descripcion"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-hpampa peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Descripcion
          </label>
        </div>
        <div className="mt-2">
          <label htmlFor="descripcion" className="text-sm text-gray-200">
            Subcategoria
          </label>
          <select
            id="selectCategoria"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            onChange={handlerChange}
            name="subcategorias"
          >
            {subcategoria[0].map((cat) => {
              if (cat[0]) {
                return (
                  <option key={cat} defaultValue={cat} >
                    {cat}
                  </option>
                );
              }
              return <option value={cat}>{cat}</option>;
            })}
          </select>
        </div>
        <div className="relative z-0 w-full mb-6 mt-6 group">
          <label className="block mb-2 text-sm text-gray-500 " htmlFor="file_input">
            Imagen Linea
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg hover:border-hpampa cursor-pointer bg-gray-50 focus:outline-none "
            id="file_input"
            name='img'
            type="file"
            onChange={handlerImage}
          />
        </div>
        <div className="m-3">
          <img src={image} width={100} height={100} />
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

export default FormProducto;
