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
    <div className="bg-slate-200 h-full min-h-screen pb-10">
      <NavBarSectores />
      <div className="grid grid-cols-4 gap-4 px-5 ">
      <div className="flex flex-col justify-center items-center col-span-2">
          <div className=" flex flex-col justify-center items-center rounded-xl ">
            <div className="grid grid-cols-4 gap-4 pr-8">
              { producto ? (producto.img.map((i) => {
                return (
                  <div className="bg-white rounded-2xl flex justify-center items-center">
                    <Image
                      className="mx-5 object-contain w-full hover:scale-150 ease-in duration-300 px-5 py-8"
                      alt="img"
                      src={i}
                      width={50}
                      height={400}
                    />
                  </div>
                );
              }) )
              : null
             }
            </div>
          </div>
        </div>
        <form className="w-full pt-8 col-span-2 flex flex-col justify-around items-start">
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
              className="py-3 my-3 px-5 bg-slate-800 text-white rounded-lg hover:bg-slate-600 hover:text-white w-full"
            >
              Enviar
            </button>
          </div>
        </form>

       
      </div>
    </div>
  );
};

export default ProductoDetalle;
