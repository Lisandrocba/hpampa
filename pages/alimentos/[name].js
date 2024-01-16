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
      <div className="flex flex-row justify-around items-center lg:items-start">
        <div className="flex flex-col justify-center items-center w-3/5">
          <div className=" flex flex-col justify-center items-center rounded-xl">
            <div className="flex flex-row flex-wrap justify-around mx-4">
              {producto ?
                producto.data.map((i) => {
                      return (
                        <div
                          key={Math.random()}
                          className="flex flex-col justify-around items-center mx-2 w-52 object-cover mb-10 bg-hpampa rounded-2xl py-5 px-5 text-slate-900 max-w-xs"
                        >
                          <Image
                            className={`w-auto h-48 py-5 object-contain`}
                            alt="img"
                            src={i.img}
                            width={100}
                            height={100}
                          />
                          <div className="flex flex-col justify-center items-start ">
                            <p className="text-xs">{i.desc}</p>
                            <p className="text-xs">{i.descIng}</p>
                          </div>
                        </div>
                      );
                    })
                  : null}
            </div>
          </div>
        </div>
        <div className="w-2/5 px-5 flex flex-col justify-center items-start">
        {producto ? (
              <h4 className="text-hpampa font-bold lg:mt-5 ">
                {producto.titulo}
              </h4>
            ) : null}
          <p className="text-2xl font-bold text-slate-800 pb-8">
              Consultas sobre el producto
            </p>
          <FormControl />
        </div>
      </div>
    </div>
  );
};

export default AlimentosDetalle;
