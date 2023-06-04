import Image from "next/image";
import React, { useContext, useState } from "react";
import logoHPampa from "../../public/logo-HPampaBlanco.png";
import Typed from "typed.js";
import Link from "next/link";
import TablaSectores from "@/components/TablaSectores";
import Cookies from "universal-cookie";

const Alimentos = () => {
  const el = React.useRef(null);
  const [listCategorias, setListCategoria] = useState(null);
  const cookie = new Cookies();
  const [cargarTabla, setCargarTabla] = useState(cookie.get("sectorSelect"))

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Sectores"],
      typeSpeed: 250,
    });
    const llamado = async () => {
      await fetch("http://localhost:3000/api/admin/rutaCategoria")
        .then((data) => data.json())
        .then((res) => setListCategoria(res.categorias));
    };
    llamado();

    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div>
      <div className="bg-cover h-40 flex-column items-center justify-center bg-[url('../public/alimentos.jpg')]">
        <div className="flex flex-row items-center justify-between">
          <Link href="/">
            <div className="flex flex-row items-center">
              <Image src={logoHPampa} alt="logohpampa" width={35} height={35} />
              <p className="text-2xl text-blanco font-bold pl-1">Pampa</p>
            </div>
          </Link>
          <h1 className="text-blanco">Comercio Exterior</h1>
        </div>
        <div className="flex justify-center items-center">
          <span
            className="font-bold font-sans text-5xl tracking-wide text-blanco"
            ref={el}
          />
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center pt-2 pb-2">
        <p className="text-blue-800 mr-4">Categorias:</p>
        {listCategorias
          ? listCategorias.map((ele) => {
              return (
                <div key={ele._id}>
                  <button
                    onClick={() => setCargarTabla(ele.nombre)}
                    className="text-ssm text-white bg-hpampa hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-2 py-2.5 text-center mr-1 mb-1"
                  >
                    {ele.nombre}
                  </button>
                </div>
              );
            })
          : null}
      </div>
      <div>
        {listCategorias
          ? listCategorias.map((ele) => {
              if (ele.nombre === cargarTabla) {
                return <TablaSectores subcategorias={ele.subcategorias} />;
              }
            })
          : null}
      </div>
    </div>
  );
};

export default Alimentos;
