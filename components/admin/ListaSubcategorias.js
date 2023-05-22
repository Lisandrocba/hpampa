import React, { useEffect } from "react";

const ListaSubcategorias = ({ listaSubcategoria }) => {
  
  const deleteItem =async(id)=>{
    const url = "http://localhost:3000/api/admin/rutaSubcategoria";
    await fetch(url,{
      method: "DELETE",
      body: JSON.stringify({
        id: id
      })
    })
  }

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Descripcion
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {listaSubcategoria
              ? listaSubcategoria.subcategorias.map((ele) => {
                  return (
                    <tr key={ele._id} className="bg-white border-b hover:bg-gray-50 ">
                      <th
                        scope="row"
                        className="px-6 py-4 text-xs font-medium text-gray-900 whitespace-nowrap"
                      >
                        {ele.nombre}
                      </th>
                      <td className="px-6 py-4">{ele.descripcion}</td>
                      <td className="px-6 py-4 text-right">
                      <button
                          className="font-medium text-blue-600 hover:underline"
                          onClick={()=>deleteItem(ele._id)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })
              : null} 
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaSubcategorias;
