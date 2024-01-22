import FormControl from "@/components/FormControl";
import NavBarSectores from "@/components/NavBarSectores";
import { ProdAlimentos } from "@/data/ProdAlimentos";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const AlimentosDetalle = () => {
  const {
    query: { name },
  } = useRouter();
 
  const producto = ProdAlimentos.find((item) => item.name === name);

  

  return (
    <div className="bg-slate-200 h-full min-h-screen pb-10">
      <NavBarSectores />
      {producto ? (
              <h4 className="text-hpampa lg:hidden m-5 font-bold lg:mt-5 ">
                {producto.titulo}
              </h4>
            ) : null}
      <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start">
        <div className="flex flex-col justify-center items-center lg:w-3/5">
          <div className=" flex flex-col justify-center items-center rounded-xl">
            <div className="flex flex-row flex-wrap justify-around mx-4">
              {producto ?
                producto.data.map((i) => {
                      return (
                        <div
                          key={Math.random()}
                          className="flex flex-col justify-around items-center mx-2 w-2/5 lg:w-auto object-cover mb-10 bg-hpampa rounded-2xl py-5 px-5 text-slate-900 max-w-xs "
                        >
                          <Image
                            className={`lg:mx-3 w-56 lg:h-56 lg:w-auto object-contain lg:hover:scale-125 ease-in duration-300 lg:px-5`}
                            alt="img"
                            src={i.img}
                            width={100}
                            height={100}
                          />
                          <div className="flex flex-col justify-center items-start ">
                            <p className="text-slate-800 text-xs lg:text-lg font-bold text-center">{i.desc}</p>
                            <p className="lg:text-xs">{i.descIng}</p>
                          </div>
                        </div>
                      );
                    })
                  : null}
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 px-5 flex flex-col justify-center items-start">
        {producto ? (
              <h4 className="text-hpampa hidden lg:block font-bold lg:mt-5 ">
                {producto.titulo}
              </h4>
            ) : null}
          <p className="text-xl lg:text-2xl font-bold text-slate-800 pb-8">
              Consultas sobre el producto
            </p>
          <FormControl />
        </div>
      </div>
    </div>
  );
};

export default AlimentosDetalle;
