import FormControl from "@/components/FormControl";
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
      {producto ? (
              <h4 className="text-hpampa lg:hidden m-5 font-bold lg:mt-5">
                {res?.titulo}
              </h4>
            ) : null}
      <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start">
        <div className="flex flex-col justify-center items-center lg:w-1/2">
          <div className=" flex flex-col justify-center items-center rounded-xl">
            <div className="flex flex-row flex-wrap justify-around mx-4">
              {producto ?
                producto.map((i) => {
                      return (
                        <div
                          key={Math.random()}
                          className="flex flex-col justify-between items-start mx-3 my-2  object-cover mb-10 bg-hpampa rounded-2xl py-5 px-5 text-slate-900"
                        >
                          {i ?
                          <Image
                            className={`mx-auto w-40 lg:h-56 lg:w-auto object-contain lg:hover:scale-125 ease-in duration-300 lg:px-40 lg:py-5`}
                            alt="img"
                            src={i?.img}
                            width={100}
                            height={100}
                            loading='lazy'
                          />
                        :
                        null
                        }
                         <div className="flex flex-col justify-center items-start ">
                            <p className="text-xl font-bold mt-5">Productos:</p> 
                            {i?.productos?.map(p=>{
                                return(
                                    <p key={Math.random()}>{p}</p>
                                )
                            })}
                          </div>
                          <div className="flex flex-col justify-center items-start ">
                            <p className="text-xl font-bold mt-5">Tamaño:</p> 
                            {i?.tam?.map(p=>{
                                return(
                                    <p key={Math.random()}>{p}</p>
                                )
                            })}
                          </div>
                          <div className="flex flex-col justify-center items-start ">
                          <p className="text-xl font-bold mt-5"> Presentacion:</p> 
                           
                            {i?.presentacion?.map(p=>{
                                return(
                                    <p key={Math.random()}>{p}</p>
                                )
                            })}
                          </div>
                          <div className="flex flex-col justify-center items-start ">
                          <p className="text-xl font-bold mt-5">  Formato: </p> 
                      
                            {i?.formato?.map(p=>{
                                return(
                                    <p key={Math.random()}>{p}</p>
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
        <div className="lg:w-1/2 w-full px-5 flex flex-col justify-center items-start">
            {producto ? (
              <h4 className="text-hpampa hidden lg:block font-bold lg:mt-5">
                {res?.titulo}
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

export default FrutosSecos;
