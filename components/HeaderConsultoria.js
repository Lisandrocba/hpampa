import React, { useState } from "react";
import { GoTriangleRight } from "react-icons/go";
import Footer from "./Footer";
import FormControl from "./FormControl";

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
    <div className="w-screen mx-0">
      <h2 className=" text-3xl lg:text-5xl pt-3 pb-7 mb-3 mt-10 text-center">
        <span className="text-6xl text-hpampa">S</span>ervicios de consultoria
      </h2>
      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center item-center mb-10 ">
        <div className="lg:w-2/5 flex flex-col flex-wrap justify-center cursor-default bg-hpampa px-5 py-10 rounded-3xl shadow-xl  m-3">
          {buttonForm.servicio1 ? (
            <FormControl />
          ) : (
            <div>
              <p className="font-bold text-2xl text-center pb-10">Servicio 1</p>
              {textos.servicio1.map((text) => {
                return (
                  <div className="flex flex-row justify-start items-center bg-sky-100 m-1 rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md  px-3 py-4">
                    <GoTriangleRight className="text-black" />
                    <p className="text-black">{text}</p>
                  </div>
                );
              })}
            </div>
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
        <div className="lg:w-2/5 flex flex-col flex-wrap justify-center cursor-default bg-hpampa px-5 py-10 rounded-3xl shadow-xl m-3">
          {buttonForm.servicio2 ? (
            <FormControl />
          ) : (
            <div>
              <p className="font-bold text-2xl text-center pb-10">Servicio 2</p>
              {textos.servicio2.map((text) => {
                return (
                  <div className="flex flex-row justify-start items-center bg-sky-100 m-1 rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md  px-3 py-4">
                    <GoTriangleRight className="text-black" />
                    <p className="text-black">{text}</p>
                  </div>
                );
              })}
            </div>
          )}
          <button
            onClick={() =>
              setButtonForm({ ...buttonForm, servicio2: !buttonForm.servicio2 })
            }
            className="py-3 my-3 px-5 bg-slate-800 text-white rounded-lg mt-10 hover:bg-slate-600"
          >
            {buttonForm.servicio2 ? "ver servicio" : "consultar"}
          </button>
        </div>
        <div className="lg:w-2/5 flex flex-col flex-wrap justify-center cursor-default bg-hpampa px-5 py-10 rounded-3xl shadow-xl  m-3">
          {buttonForm.servicio3 ? (
            <FormControl />
          ) : (
            <div>
              <p className="font-bold text-2xl text-center pb-10">Servicio 3</p>

              {textos.servicio3.map((text) => {
                return (
                  <div className="flex flex-row justify-start items-center bg-sky-100 m-1 rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md  px-3 py-4">
                    <GoTriangleRight className="text-black" />
                    <p className="text-black">{text}</p>
                  </div>
                );
              })}
            </div>
          )}
          <button
            onClick={() =>
              setButtonForm({ ...buttonForm, servicio3: !buttonForm.servicio3 })
            }
            className="py-3 my-3 px-5 bg-slate-800 text-white rounded-lg mt-10 hover:bg-slate-600"
          >
            {buttonForm.servicio3 ? "ver servicio" : "consultar"}
          </button>
        </div>
        <div className="lg:w-2/5 flex flex-col flex-wrap justify-center cursor-default bg-hpampa px-5 py-10 rounded-3xl shadow-xl  m-3">
          {buttonForm.servicio4 ? (
            <FormControl />
          ) : (
            <div>
              <p className="font-bold text-2xl text-center pb-10">Servicio 4</p>
              {textos.servicio4.map((text) => {
                return (
                  <div className="flex flex-row justify-start items-center bg-sky-100 m-1 rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md  px-3 py-4">
                    <GoTriangleRight className="text-black" />
                    <p className="text-black">{text}</p>
                  </div>
                );
              })}
            </div>
          )}
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
    </div>
  );
};

export default HeaderConsultoria;
