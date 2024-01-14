import NavBarSectores from "@/components/NavBarSectores";
import { ProdSecos } from "@/data/ProdSecos";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const FrutosSecos = () => {
    
  const {
    query: { name },
  } = useRouter();
 
  const res = ProdSecos.find((item) => item.name === name);
  const producto = [res]
  return (
    <div className="bg-slate-200 h-full min-h-screen pb-10">
      <NavBarSectores />
      <div className="flex flex-row justify-around items-center lg:items-start">
        <div className="flex flex-col justify-center items-center w-1/2">
          <div className=" flex flex-col justify-center items-center rounded-xl">
            <div className="flex flex-row flex-wrap justify-around mx-4">
              {producto ?
                producto.map((i) => {
                      return (
                        <div
                          key={Math.random()}
                          className="flex flex-col justify-between items-start mx-3 my-2  object-cover mb-10 bg-hpampa rounded-2xl py-5 px-5 text-slate-900"
                        >
                          <Image
                            className={`w-32 mx-auto`}
                            alt="img"
                            src={i.img}
                            width={100}
                            height={100}
                          />
                          <div className="flex flex-col justify-center items-start ">
                            <p className="text-xl font-bold mt-5">Tamaño:</p> 
                            {i.tam?.map(p=>{
                                return(
                                    <p>{p}</p>
                                )
                            })}
                          </div>
                          <div className="flex flex-col justify-center items-start ">
                          <p className="text-xl font-bold mt-5"> Presentacion:</p> 
                           
                            {i.presentacion?.map(p=>{
                                return(
                                    <p>{p}</p>
                                )
                            })}
                          </div>
                          <div className="flex flex-col justify-center items-start ">
                          <p className="text-xl font-bold mt-5">  Formato: </p> 
                      
                            {i.formato?.map(p=>{
                                return(
                                    <p>{p}</p>
                                )
                            })}
                          </div>
                        </div>
                      );
                    })
                  : null}
            </div>
          </div>
        </div>
        <div className="w-1/2 px-5 flex flex-col justify-center items-center">
          <form className="w-full pt-8 col-span-2 flex flex-col justify-start item-start lg:pt-0">
            {producto ? (
              <h4 className="text-hpampa font-bold lg:mt-5">
                {res.titulo}
              </h4>
            ) : null}

            <p className="text-2xl font-bold text-slate-800 pb-8">
              Consultas sobre el producto
            </p>
            <div className="flex-column items-center w-full">
              <input
                type="text"
                id="first_name"
                className="mb-5 bg-transparent border-t-transparent border-l-transparent border-r-transparent border-gray-300 text-gray-900 text-xl border-2 focus:border-b-hpampa focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
                placeholder="Nombre compania"
                required
              />
              <input
                type="text"
                id="last_name"
                className="mb-5  bg-transparent border-t-transparent border-l-transparent border-r-transparent border-gray-300 text-gray-900 text-xl border-2 focus:border-b-hpampa focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
                placeholder="Nombre de contacto"
                required
              />
              <input
                type="email"
                id="email"
                className="mb-5  bg-transparent border-t-transparent border-l-transparent border-r-transparent border-gray-300 text-gray-900 text-xl border-2 focus:border-b-hpampa focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
                placeholder="Email"
                required
              />
              <button
                type="submit"
                className="py-3 my-3 px-5 bg-slate-800 text-white rounded-lg hover:bg-slate-600 hover:text-white w-full lg:mt-5"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FrutosSecos;
