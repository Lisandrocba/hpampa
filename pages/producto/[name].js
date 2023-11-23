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
    <div>
      <NavBarSectores />
      <div className="flex flex-col justify-center items-center mb-5 ">
            <Image className="mt-0 w-1/4 px-10 py-5 bg-hpampa rounded-2xl mb-5" alt="img" src={producto.logo} width={200} height={200} />
        <div className=" flex flex-col justify-center items-center rounded-xl bg-slate-300">
            <p className="text-slate-800 font-bold text-2xl pt-5">Productos</p>
            <div className="flex flex-row flex-wrap items-end justify-center  px-20 py-10">
            {producto.img.map((i) => {
                return (
                <>
                    <Image className="mx-5 w-auto  hover:scale-150 ease-in duration-300" alt="img" src={i} width={100} height={200} />
                </>
                );
            })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
