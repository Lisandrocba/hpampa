import React, { useEffect, useState } from 'react'

const TablaProductos = ({subcategoriaSelect}) => {
  const [listaProductos, setListaProductos] = useState();
  const [image, setImage] = useState()
  
  useEffect(() => {
    const productos = async () => {
      await fetch("http://localhost:3000/api/admin/rutaProducto")
        .then((data) => data.json())
        .then((res) => setListaProductos(res.productos));
    };
    productos();
  }, []);

  const handlerImage =(img)=>{
    const fileRead = new FileReader();
    fileRead.readAsDataURL(img);
    fileRead.onload = function (e) {
      setImage(fileRead.result);
    };
  };
  
  return (
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-2">
        <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
          <thead class="text-xs text-white uppercase bg-blue-600 dark:text-white">
            <tr>
              <th scope="col" class="px-6 py-3">
                Nombre Empresa
              </th>
              <th scope="col" class="px-6 py-3">
                Nombre Linea
              </th>
              <th scope="col" class="px-6 py-3">
                descripcion
              </th>
              <th scope="col" class="px-6 py-3">
                Subcategoria
              </th>
              <th scope="col" class="px-6 py-3">
                Imagen
              </th>
            </tr>
          </thead>
          <tbody>
            {listaProductos
              ? listaProductos.map((ele) => {
                  if (ele.subcategorias === subcategoriaSelect) {
                    {handlerImage(ele.img)}
                    return (
                      <tr class="bg-blue-500 border-b border-blue-400">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                        >
                          {ele.nombreEmpresa}
                        </th>
                        <td class="px-6 py-4">{ele.nombreLinea}</td>
                        <td class="px-6 py-4">{ele.descripcion}</td>
                        <td class="px-6 py-4">{ele.subcategorias}</td>
                        <td class="px-6 py-4">
                            <img src={image} width={100} height={100} />
                        </td>
                      </tr>
                    );
                  }
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TablaProductos
