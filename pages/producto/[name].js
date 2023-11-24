import React from "react";
import { prodBebidas } from "@/data/ProdBodegas";
import { useRouter } from "next/router";
import Image from "next/image";
import NavBarSectores from "@/components/NavBarSectores";

const ProductoDetalle = () => {
  const {
    query: { name },
  } = useRouter();
  const producto = prodBebidas.find((item) => item.name === name);
  return (
    <div className="bg-slate-200 h-full min-h-screen">
      <NavBarSectores />
      <div className="grid grid-cols-4 gap-4 px-5 ">
        <div className=" flex flex-col justify-center items-center rounded-xl  col-span-2 ">
          <p className="text-slate-800 text-2xl pt-5 pb-20">Productos:</p>
          <div className="grid grid-cols-4 gap-4 pr-8">
            {producto.img.map((i) => {
              return (
                <div className="bg-white rounded-2xl flex justify-center items-center">
                  <Image
                    className="mx-5 w-auto  hover:scale-150 ease-in duration-300 px-5 py-8  "
                    alt="img"
                    src={i}
                    width={100}
                    height={200}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center col-span-2">
            <Image
            className="mt-0 px-10 py-5 bg-hpampa rounded-2xl mb-5"
            alt="img"
            src={producto.logo}
            width={200}
            height={200}
            />
            <form className="w-full pt-8">
                <p className="text-2xl font-bold text-slate-800">Consultas sobre el producto</p>
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
                className="text-white bg-blue-700 hover:bg-hpampa focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full  px-5 py-2.5 mt-5 mb-10 text-center"
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

export default ProductoDetalle;
