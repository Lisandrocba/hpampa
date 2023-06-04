import React, { useEffect, useState } from "react";
import TablaProductos from "./TablaProductos";

const TablaSectores = ({ subcategorias }) => {
  const [subcategoriaSelect, setSubcategoriaSelect] = useState(subcategorias[0].subcategoria);
 
  return (
    <div className="flex flex-row flex-wrap justify-center items-center pt-2 pb-2">
      <p className="text-blue-800 mr-4">Subcategoria:</p>
      {subcategorias
        ? subcategorias.map((ele) => {
            return (
              <div key={ele._id}>
                <button
                  onClick={() => setSubcategoriaSelect(ele.subcategoria)}
                  className="text-ssm text-white bg-hpampa hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-2 py-2.5 text-center mr-1 mb-1"
                >
                  {ele.subcategoria}
                </button>
              </div>
            );
          })
        : null}
      <TablaProductos subcategoriaSelect={subcategoriaSelect} />
    </div>
  );
};

export default TablaSectores;
