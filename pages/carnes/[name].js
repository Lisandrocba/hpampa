import NavBarSectores from "@/components/NavBarSectores";
import { prodCarnes } from "@/data/ProdCarnes";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const CarneDetalle = () => {
  const {
    query: { name },
  } = useRouter();
  const producto = prodCarnes.find((item) => item.name === name);
  console.log(producto);
  return (
    <div className="bg-slate-200 h-full min-h-screen pb-10">
      <NavBarSectores />
      <div className="flex flex-row justify-around items-center lg:items-start">
        <div className="flex flex-col justify-center items-center w-1/2">
          <div className=" flex flex-col justify-center items-center rounded-xl">
            <div className="flex flex-row flex-wrap justify-around mx-4">
              {producto
                ? producto.name === "pescados"
                  ? producto.data.map((i) => {
                      return (
                        <div
                          key={Math.random()}
                          className="flex flex-col justify-around items-center mx-3 my-2  object-cover mb-10 bg-hpampa rounded-2xl py-5 px-5 text-slate-900"
                        >
                          <p className="text-sm text-center">{i.desc}</p>
                          <Image
                            className={`w-48 py-5`}
                            alt="img"
                            src={i.img}
                            width={400}
                            height={800}
                          />
                          <div className="mt-5">
                            {i.tipos
                              ? i.tipos.map((tipo) => {
                                  return <p className="text-xs">{tipo}</p>;
                                })
                              : null}
                          </div>
                        </div>
                      );
                    })
                  : producto.data.map((i) => {
                      return (
                        <div
                          key={Math.random()}
                          className="flex flex-col justify-around items-center mx-3 my-2 w-40 object-cover mb-10 bg-hpampa rounded-2xl py-5 px-3 text-slate-900"
                        >
                          <p className="text-xs text-center">{i.desc}</p>
                          <Image
                            className={`pt-5`}
                            alt="img"
                            src={i.img}
                            width={400}
                            height={800}
                          />
                        </div>
                      );
                    })
                : null}
            </div>
            {producto.name === "ovino" ? (
              <div className="bg-hpampa px-5 py-3 text-slate-900 rounded-2xl">
                <p>Codero / lamb: 8-15 kg</p>
                <p>Cabrito / Baby Goat: 6-8 kg</p>
                <p>Cabra / Goat 8-15: kg</p>
                <p>Mutton: 16-25 kg</p>
                <p>Oveja / Sheep: 18-25 kg</p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-1/2 px-5">
          <form className="w-full pt-8 col-span-2 flex flex-col justify-start item-start lg:pt-0">
            {producto ? (
              <h4 className="text-hpampa font-bold lg:mt-5">
                {producto.titulo}
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
          <div className="flex flex-row justify-around bg-white rounded-2xl">
            <Image
              className="w-24 h-24 object-contain p-2"
              alt="img"
              src='https://i.imgur.com/F5Isnb4.png'
              width={400}
              height={800}
            />
            <Image
              className="w-24 h-24 object-contain p-2"
              alt="img"
              src='https://i.imgur.com/dVBa4Tq.png'
              width={400}
              height={800}
            />
            <Image
              className="w-24 h-24 object-contain p-2"
              alt="img"
              src='https://i.imgur.com/8JZzXAb.png'
              width={400}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarneDetalle;
