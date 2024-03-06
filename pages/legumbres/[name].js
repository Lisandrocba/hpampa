import FormControl from "@/components/FormControl";
import NavBarSectores from "@/components/NavBarSectores";
import { ProdLegumbre } from "@/data/ProdLegumbre";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const LegumbresDetalle = () => {
  const {
    query: { name },
  } = useRouter();

  const producto = ProdLegumbre.find((item) => item.name === name);

  return (
    <div className="bg-slate-200 h-full min-h-screen pb-10">
      <NavBarSectores />
      {producto ? (
        <h4 className="text-hpampa lg:hidden my-5 mx-5 font-bold lg:mt-5">
          {producto.titulo}
        </h4>
      ) : null}
      <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start">
        <div className="flex flex-col justify-center items-center lg:w-1/2">
          <div className=" flex flex-col justify-center items-center rounded-xl">
            <div className="flex flex-row flex-wrap justify-around ">
              {producto
                ? producto.data.map((i) => {
                    return (
                      <div
                        key={Math.random()}
                        className="flex flex-col justify-between items-center mx-3 my-2  object-cover mb-10 bg-hpampa rounded-2xl w-2/5 h-64 py-5 px-5 text-slate-900"
                      >
                        <Image
                          className={`mx-3 w-76 lg:w-44 object-contain lg:hover:scale-125 ease-in duration-300 lg:px-5 lg:py-5`}
                          alt="img"
                          src={i.img}
                          width={100}
                          height={100}
                        />
                        <div className="flex flex-col justify-center items-center ">
                          <p className="text-sm font-bold text-slate-800 text-center">
                            {i.desc}
                          </p>
                          <p className="text-sm font-bold text-slate-800 text-center">
                            {i.descIng}
                          </p>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 w-full px-5 flex flex-col justify-center items-center lg:items-start">
          {producto ? (
            <h4 className="text-hpampa hidden lg:block font-bold lg:mt-5">
              {producto.titulo}
            </h4>
          ) : null}
          <div className="bg-hpampa px-5 py-3 lg:hidden mb-10 rounded-2xl mt-10">
            <h4 className="mb-5 text-lg">Presentacion:</h4>
            {producto
              ? producto.presentacion.map((descripcion) => {
                  return <p key={Math.random()}>{descripcion}</p>;
                })
              : null}
          </div>
          <p className="text-xl  lg:text-2xl mt-5 font-bold text-slate-800 pb-8">
            Consultas sobre el producto
          </p>
          <FormControl />
          <div className="bg-hpampa px-5 py-3 hidden lg:block rounded-2xl mt-10">
            <h4 className="mb-5 text-lg">Presentacion:</h4>
            {producto
              ? producto.presentacion.map((descripcion) => {
                  return (
                    <div key={Math.random()}>
                      <p>{descripcion}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegumbresDetalle;
