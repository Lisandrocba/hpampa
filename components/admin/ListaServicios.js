import React, { useEffect, useState } from "react";

const ListaServicios = (props) => {
  const [listaCategoria, setListaCategoria] = useState([]);
  const [listaSubcategoria, setListaSubcategoria] = useState([]);
  const [listaProducto, setListaProducto] = useState([]);

  useEffect(() => {
    async function devolver() {

      const url = "http://localhost:3000/api/admin/rutaProducto";
      await fetch(url)
        .then((data) => data.json())
        .then((res) => setListaProducto(res.productos));
      
      const urlCategorias = "http://localhost:3000/api/admin/rutaCategoria";
      await fetch(urlCategorias)
        .then((data) => data.json())
        .then((res) => setListaCategoria(res));

      const urlSubcategorias = "http://localhost:3000/api/admin/rutaSubcategoria";
      await fetch(urlSubcategorias)
        .then((data) => data.json())
        .then((res) => setListaSubcategoria(res));
    }
    devolver();
  }, []);

  console.log(listaCategoria)

  const mostrarListaProductos = () => {
    return console.log(listaProducto);
  };

  const clickCategoria = () => {};

  return (
    <div className="mb-5 mt-5">
      <div className="flex flex-nowrap">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-hpampa to-blue-300 group-hover:from-hpampa group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
          <span className="relative w-48 text-xs px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Categorias
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-hpampa to-blue-300 group-hover:from-hpampa group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
          <span className="relative w-48 text-xs px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Subcategoria
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-hpampa to-blue-300 group-hover:from-hpampa group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
          <span className="relative w-48 text-xs px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Productos
          </span>
        </button>
      </div>
      
    </div>
  );
};

export default ListaServicios;
