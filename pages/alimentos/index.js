import Image from "next/image";
import React, { useState } from "react";
import logoHPampa from "../../public/logo-HPampaBlanco.png";
import Typed from "typed.js";
import Link from "next/link";
import TablaSectores from "@/components/TablaSectores";
import Cookies from "universal-cookie";

const Alimentos = () => {
  const el = React.useRef(null);
  const [listCategorias, setListCategoria] = useState(null);
  const cookie = new Cookies();
  const [cargarTabla, setCargarTabla] = useState(cookie.get("sectorSelect"));
  const [subcategoriaSelect, setSubcategoriaSelect] = useState(null);


  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Sectores"],
      typeSpeed: 250,
    });
    const llamado = async () => {
      await fetch("http://localhost:3000/api/admin/rutaCategoria")
        .then((data) => data.json())
        .then((res) => {
          setListCategoria(res.categorias)
          setSubcategoriaSelect(res.categorias[0].subcategorias[0].subcategoria) 
        });

      };
      llamado();
      
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-zinc-800">
      <div className="bg-cover h-40 flex-column items-center justify-center  bg-gradient-to-t from-zinc-800 to-zinc-900">
        <div className="flex flex-row items-center justify-between">
          <Link href="/">
            <div className="flex flex-row items-center p-2">
              <Image src={logoHPampa} alt="logohpampa" width={35} height={35} />
              <p className="text-2xl text-blanco font-bold pl-1">Pampa</p>
            </div>
          </Link>
          <h1 className="text-blanco p-2">Comercio Exterior</h1>
        </div>
        <div className="flex justify-center items-center">
          <span
            className="font-bold font-sans text-5xl tracking-wide text-blanco"
            ref={el}
          />
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-around items-start m-3">
        <div className="flex flex-col flex-wrap justify-center items-start w-1/6">
          <div className="flex flex-col flex-wrap justify-center items-start pt-2 pb-2">
            <p className="text-blue-800 mr-4">Categorias:</p>
            {listCategorias
              ? listCategorias.map((ele) => {
                 
                  return (
                    <div key={ele._id}>
                      
                      <button
                        onClick={() => {setCargarTabla(ele.nombre); setSubcategoriaSelect(ele.subcategorias[0] ? ele.subcategorias[0].subcategoria : null)}}
                        className="text-ssm text-white hover:text-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-2 py-2.5 text-start mr-1 mb-1"
                      >
                        {ele.nombre}
                      </button>
                    </div>
                  );
                })
              : null}
          </div>
          <div className="flex flex-col flex-wrap justify-center items-start pt-2 pb-2">
            <p className="text-blue-800 mr-4">Subcategoria:</p>
            {listCategorias
            ? listCategorias.map((ele) => {
                if (ele.nombre === cargarTabla) {
                  
                  return ele.subcategorias.map((ele) => {
                    return (
                      <div key={ele._id}>
                        <button
                          onClick={() => setSubcategoriaSelect(ele.subcategoria)}
                          className="text-ssm text-white hover:text-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-2 py-2.5  text-start mr-1 mb-1"
                        >
                          {ele.subcategoria}
                        </button>
                      </div>
                    );
                  })
                 
                }
              })
            : null}
          </div>
        </div>
        <div className="w-5/6">
          {listCategorias
            ? listCategorias.map((ele) => {
                if (ele.nombre === cargarTabla) {
                  return <TablaSectores key={ele}  subcategoriaSelect={subcategoriaSelect}/>;
                }
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Alimentos;
