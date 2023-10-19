import { AdminContext } from "@/context/AdminContext";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";

const Seccion = () => {
  
  const [listCategorias, setListCategoria] = useState(null);

  useEffect(() => {
    const devolver = async () => {
      await fetch("http://localhost:3000/api/admin/rutaCategoria")
        .then((data) => data.json())
        .then((res) => setListCategoria(res.categorias));
    };
    devolver();
  }, []);

  const sectorSelect = (nombre) => {
    const cookie = new Cookies();
    cookie.set("sectorSelect", nombre);
  };

  return (
    <div className="bg-hpampa p-5 pb-7">
      <h3 className="text-xl text-blanco p-3 pb-7">
        Sectores con los que trabajamos
      </h3>
      <div className="flex flex-row flex-wrap  justify-around items-center">
        {listCategorias
          ? listCategorias.map((ele) => {
              return (
                <Link
                  href="/alimentos"
                  onClick={() => sectorSelect(ele.nombre)}
                  key={ele._id}
                >
                  <div className="grid justify-items-center items-center bg-hpampa rounded-full m-1  p-5 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">
                    <h2 className="text-xs text-white">{ele.nombre}</h2>
                  </div>
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Seccion;
