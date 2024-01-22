import React from "react";
import { prodBebidas } from "@/data/ProdBodegas";
import { useRouter } from "next/router";
import Image from "next/image";
import NavBarSectores from "@/components/NavBarSectores";
import FormControl from "@/components/FormControl";

const ProductoDetalle = () => {
  const {
    query: { name },
  } = useRouter();
  const producto = prodBebidas.find((item) => item.name === name);
  return (
    <div className="bg-slate-200 h-full min-h-screen pb-10">
      <NavBarSectores />
      {producto ? (
            <h4 className="text-hpampa font-bold text-center my-5  lg:hidden lg:mt-5">{producto.titulo}</h4>
          ) : null}
      <div className="flex flex-col justify-center items-start px-10  lg:flex lg:flex-row">
        <div className="flex flex-col justify-center items-center col-span-2">
          <div className=" flex flex-col justify-center items-center rounded-xl">
            <div className="flex flex-row flex-wrap justify-around">
              {producto
                ? producto.img.map((i) => {
                    return (
                      <div key={Math.random()} className="flex justify-center items-center mx-3 my-2 lg:mt-5 bg-hpampa rounded-xl w-2/5 lg:w-1/4">
                        <Image
                          className={`mx-3 w-32 h-64 lg:h-64 lg:w-32 object-contain lg:hover:scale-125 ease-in duration-300 px-5 py-5`}
                          alt="img"
                          src={i}
                          width={400}
                          height={850}
                        />
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-5 flex flex-col justify-center items-center">
          {producto ? (
            <h4 className="text-hpampa font-bold text-start  hidden lg:block lg:mt-5">{producto.titulo}</h4>
          ) : null}

          <p className="text-2xl font-bold mt-10 text-slate-800 pb-8">
            Consultas sobre el producto
          </p>
        <FormControl />
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
