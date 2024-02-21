import FormControl from "@/components/FormControl";
import NavBarSectores from "@/components/NavBarSectores";
import { prodCarnes } from "@/data/ProdCarnes";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const CarneDetalle = () => {
  const {
    query: { name },
  } = useRouter();

  if(!name){
    return
  }

  const producto = prodCarnes.find((item) => item.name === name);
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
            <div className="flex flex-row flex-wrap justify-around mx-4">
              {producto.name
                ? producto.name === "pescados"
                  ? producto.data.map((i) => {
                      return (
                        <div
                          key={Math.random()}
                          className="flex flex-col justify-around items-center  object-cover mb-10 bg-hpampa rounded-2xl py-5 px-5 text-slate-900 w-40 h-40 lg:w-2/5"
                        >
                          <p className="text-sm font-bold text-slate-800 text-center">{i.desc}</p>
                          <Image
                            className={`mx-3 h-64 lg:h-32 lg:w-auto object-contain lg:hover:scale-125 ease-in duration-300 px-5 py-5`}
                            alt="img"
                            src={i.img}
                            width={400}
                            height={800}
                          />
                          <div className="mt-5">
                            {i.tipos
                              ? i.tipos.map((tipo) => {
                                  return <p className="text-sm text-slate-800 text-center">{tipo}</p>;
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
                          className="flex flex-col justify-around items-center mx-1 object-cover mb-3 bg-hpampa rounded-2xl px-3 w-40 h-40 lg:w-2/5 text-slate-900"
                        >
                          <p className="text-ssm lg:text-sm font-bold text-slate-800 text-center mt-3">{i.desc}</p>
                          <Image
                            className={`mx-3  h-64 lg:h-auto lg:w-56 object-contain lg:hover:scale-125 ease-in duration-300 px-5 py-5`}
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
            {
            producto.name ?
            producto.name === "ovino" ? (
              <div className="bg-hpampa px-5 py-3 text-slate-900 rounded-2xl">
                <p>Codero / lamb: 8-15 kg</p>
                <p>Cabrito / Baby Goat: 6-8 kg</p>
                <p>Cabra / Goat 8-15: kg</p>
                <p>Mutton: 16-25 kg</p>
                <p>Oveja / Sheep: 18-25 kg</p>
              </div>
            ) : null
          : null
          }
          </div>
        </div>
        <div className="lg:w-2/5 px-5">
            {producto ? (
              <h4 className="text-hpampa hidden lg:block font-bold lg:mt-5">
                {producto.titulo}
              </h4>
            ) : null}

            <p className="text-2xl mt-5 font-bold text-slate-800 pb-8">
              Consultas sobre el producto
            </p>
          <FormControl />
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
