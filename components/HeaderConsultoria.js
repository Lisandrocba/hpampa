import React, { useState } from "react";
import { GoTriangleRight } from "react-icons/go";
import Footer from "./Footer";

const textos = {
  servicio1: [
    "Desarrollo de clientes y mercados.",
    "Desarrollo de proveedores de productos y/o insumos.",
    "Control de producción en proveedores del exterior.",
    "Envío de muestras a clientes del exterior.",
    "Exportación por cuenta y orden de terceros.",
  ],
  servicio2: [
    "Participación en misiones propias e inversas.",
    "Promoción a través de comerciantes propios.",
    "Ingreso, egreso y liquidación de divisas.",
    "Confección y control de documentos.",
    "Tramites en registro de importadores/exportadores.",
  ],
  servicio3: [
    "Tramitación de certificados y autorizaciones.",
    "Asesoramiento sobre el modo de transporte.",
    "Supervisión física de los embarques.",
    "Coordinación y seguimiento de embarque / destino.",
    "Seguimiento de los reintegros a la exportación.",
  ],
  servicio4: [
    "Análisis tributario y aduanero.",
    "Confección y presentación de SIMI y LNA.",
    "Planificación y generación de ordenes de compras.",
    "Gestión de certificaciones previas a importación.",
    "Control de importaciones temporales.",
  ],
};

const HeaderConsultoria = () => {
  const [buttonForm, setButtonForm] = useState({
    servicio1: false,
    servicio2: false,
    servicio3: false,
    servicio4: false,
  });
  console.log(buttonForm);
  return (
    <div>
      <h2 className="text-5xl pt-3 pb-7 mb-3 mt-10 text-center">
        <span className="text-6xl text-hpampa">S</span>ervicios de consultoria
      </h2>
      <div className="flex flex-row flex-wrap justify-center items-center mb-10 ">
        <div className="w-2/5 flex flex-col flex-wrap justify-center cursor-default bg-sky-100 px-5 py-10 rounded-3xl shadow-xl border-4 border-slate-700 border-solid m-3">
          <p className="font-bold text-2xl text-center pb-10">Servicio 1</p>
          {buttonForm.servicio1 ? (
            <form className="w-full">
              <div className="flex-column items-center w-full">
                <input
                  type="text"
                  id="first_name"
                  className="mb-5 bg-transparent border-t-transparent border-l-transparent border-r-transparent border-gray-300 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
                  placeholder="Nombre compania"
                  required
                />
                <input
                  type="text"
                  id="last_name"
                  className="mb-5  bg-transparent border-t-transparent border-l-transparent border-r-transparent border-gray-300 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
                  placeholder="Nombre de contacto"
                  required
                />
                <input
                  type="email"
                  id="email"
                  className="mb-5  bg-transparent border-t-transparent border-l-transparent border-r-transparent border-gray-300 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
                  placeholder="Email"
                  required
                />
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full  px-5 py-2.5 mt-5 mb-10 text-center"
                >
                  Enviar
                </button>
              </div>
            </form>
          ) : (
            textos.servicio1.map((text) => {
              return (
                <div className="flex flex-row justify-center items-center bg-hpampa m-1 rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md border-black border-solid border-2 px-3 py-4">
                  <GoTriangleRight className="text-white" />
                  <p className="text-white">{text}</p>
                </div>
              );
            })
          )}
          <button
            onClick={() =>
              setButtonForm({ ...buttonForm, servicio1: !buttonForm.servicio1 })
            }
            className="py-3 my-3 px-5 bg-slate-800 text-white rounded-lg mt-10 hover:bg-slate-600"
          >
            {buttonForm.servicio1 ? "ver servicio" : "consultar"}
          </button>
        </div>
        <div className="w-2/5 flex flex-col flex-wrap justify-center cursor-default bg-sky-100 px-5 py-10 rounded-3xl shadow-xl border-4 border-slate-700 border-solid m-3">
          <p className="font-bold text-2xl text-center pb-10">Servicio 2</p>
          {buttonForm.servicio2
            ? 
            (
              <form className="w-full">
                <div className="flex-column items-center w-full">
                  <input
                    type="text"
                    id="first_name"
                    className="mb-5 bg-transparent border-t-transparent border-l-transparent border-r-transparent border-gray-300 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
                    placeholder="Nombre compania"
                    required
                  />
                  <input
                    type="text"
                    id="last_name"
                    className="mb-5  bg-transparent border-t-transparent border-l-transparent border-r-transparent border-gray-300 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
                    placeholder="Nombre de contacto"
                    required
                  />
                  <input
                    type="email"
                    id="email"
                    className="mb-5  bg-transparent border-t-transparent border-l-transparent border-r-transparent border-gray-300 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
                    placeholder="Email"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full  px-5 py-2.5 mt-5 mb-10 text-center"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            )
            : textos.servicio2.map((text) => {
                return (
                  <div className="flex flex-row justify-center items-center bg-hpampa m-1 rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md border-black border-solid border-2 px-3 py-4">
                    <GoTriangleRight className="text-white" />
                    <p className="text-white">{text}</p>
                  </div>
                );
              })}
          <button
            onClick={() =>
              setButtonForm({ ...buttonForm, servicio2: !buttonForm.servicio2 })
            }
            className="py-3 my-3 px-5 bg-slate-800 text-white rounded-lg mt-10 hover:bg-slate-600"
          >
            {buttonForm.servicio2 ? "ver servicio" : "consultar"}
          </button>
        </div>
        <div className="w-2/5 flex flex-col flex-wrap justify-center cursor-default bg-sky-100 px-5 py-10 rounded-3xl shadow-xl border-4 border-slate-700 border-solid m-3">
          <p className="font-bold text-2xl text-center pb-10">Servicio 3</p>
          {buttonForm.servicio3
            ? 
            (
              <form className="w-full">
                <div className="flex-column items-center w-full">
                  <input
                    type="text"
                    id="first_name"
                    className="mb-5 bg-transparent border-t-transparent border-l-transparent border-r-transparent border-gray-300 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
                    placeholder="Nombre compania"
                    required
                  />
                  <input
                    type="text"
                    id="last_name"
                    className="mb-5  bg-transparent border-t-transparent border-l-transparent border-r-transparent border-gray-300 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
                    placeholder="Nombre de contacto"
                    required
                  />
                  <input
                    type="email"
                    id="email"
                    className="mb-5  bg-transparent border-t-transparent border-l-transparent border-r-transparent border-gray-300 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
                    placeholder="Email"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full  px-5 py-2.5 mt-5 mb-10 text-center"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            )
            : textos.servicio3.map((text) => {
                return (
                  <div className="flex flex-row justify-center items-center bg-hpampa m-1 rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md border-black border-solid border-2 px-3 py-4">
                    <GoTriangleRight className="text-white" />
                    <p className="text-white">{text}</p>
                  </div>
                );
              })}
          <button
            onClick={() =>
              setButtonForm({ ...buttonForm, servicio3: !buttonForm.servicio3 })
            }
            className="py-3 my-3 px-5 bg-slate-800 text-white rounded-lg mt-10 hover:bg-slate-600"
          >
            {buttonForm.servicio3 ? "ver servicio" : "consultar"}
          </button>
        </div>
        <div className="w-2/5 flex flex-col flex-wrap justify-center cursor-default bg-sky-100 px-5 py-10 rounded-3xl shadow-xl border-4 border-slate-700 border-solid m-3">
          <p className="font-bold text-2xl text-center pb-10">Servicio 4</p>
          {buttonForm.servicio4
            ? 
            (
              <form className="w-full">
                <div className="flex-column items-center w-full">
                  <input
                    type="text"
                    id="first_name"
                    className="mb-5 bg-transparent border-t-transparent border-l-transparent border-r-transparent border-gray-300 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
                    placeholder="Nombre compania"
                    required
                  />
                  <input
                    type="text"
                    id="last_name"
                    className="mb-5  bg-transparent border-t-transparent border-l-transparent border-r-transparent border-gray-300 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
                    placeholder="Nombre de contacto"
                    required
                  />
                  <input
                    type="email"
                    id="email"
                    className="mb-5  bg-transparent border-t-transparent border-l-transparent border-r-transparent border-gray-300 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
                    placeholder="Email"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full  px-5 py-2.5 mt-5 mb-10 text-center"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            )
            : textos.servicio4.map((text) => {
                return (
                  <div className="flex flex-row justify-center items-center bg-hpampa m-1 rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md border-black border-solid border-2 px-3 py-4">
                    <GoTriangleRight className="text-white" />
                    <p className="text-white">{text}</p>
                  </div>
                );
              })}
          <button
            onClick={() =>
              setButtonForm({ ...buttonForm, servicio4: !buttonForm.servicio4 })
            }
            className="py-3 my-3 px-5 bg-slate-800 text-white rounded-lg mt-10 hover:bg-slate-600"
          >
            {buttonForm.servicio4 ? "ver servicio" : "consultar"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HeaderConsultoria;
