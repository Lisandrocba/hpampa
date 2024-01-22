import React, { useState } from "react";
import { GoTriangleRight } from "react-icons/go";
import FormControlServicios from "./FormControlServicios";

const textos = {
  servicio1: [
    "Desarrollo de Clientes y Mercados",
    "Desarrollo de Proveedores",
    "Participación en Misiones Propias e Inversas",
    "Expositores en Ferias Internacionales",
    "Promoción a través de Comerciales Propios",
  ],
  servicio2: [
    "Trámites en Registro de Importadores/Exportadores",
    "Análisis Tributario y Aduanero",
    "Confección y Control de Documentos",
    "Asesoramiento Logístico",
    "Tramitación de Certificados y Autorizaciones",
    "Gestión de Certificaciones previas a la Importación",
  ],
  servicio3: [
    "Planificación y Generación de Ordenes de Compras",
    "Envío de Muestras a Clientes Internacionales",
    "Exportación por Cuenta y Orden de Terceros",
    "Control de Producción en Proveedores Internacionales",
    "Supervisión Física de los Embarques",
    "Coordinación y Seguimientos de Embarque/Destino",
    "Control de Importaciones Temporales",
  ],
};

const HeaderConsultoria = () => {
  const [buttonForm, setButtonForm] = useState({
    servicio1: false,
    servicio2: false,
    servicio3: false,
    servicio4: false,
    servicio: ''
  });

  return (
    <div className="w-screen mx-0">
      <h2 className="text-xl lg:text-5xl pt-3 pb-7 mb-3 mt-10 text-center">
        <span className="text-2xl lg:text-6xl text-hpampa">S</span>ervicios de{" "}
        <span className="text-2xl lg:text-6xl text-hpampa">C</span>onsultoria
      </h2>
      <div className="flex flex-col lg:flex-col lg:flex-wrap justify-center item-center mb-10 ">
        <div className="flex flex-col flex-wrap justify-center items-center cursor-default border-b-solid border-b-2 border-slate-400 lg:px-5 py-10 lg:mx-10 my-3">
          {buttonForm.servicio2 ? (
            <FormControlServicios servicio={buttonForm.servicio}/>
          ) : (
            <div>
              <p className="font-bold text-2xl text-center pb-10">Servicio 2</p>
              <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center">
                {textos.servicio2.map((text) => {
                  return (
                    <div
                      key={Math.random()}
                      className="flex flex-row justify-start items-center bg-hpampa m-1 rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md  px-3 py-4 w-4/5 lg:w-2/5"
                    >
                      <GoTriangleRight className="text-white" />
                      <p className="text-white">{text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <button
            onClick={() =>
              setButtonForm({ ...buttonForm, servicio2: !buttonForm.servicio2, servicio1: false, servicio3: false, servicio: 'Servicio 2' })
            }
            className="py-3 my-3 px-5 bg-gray-dark hover:bg-slate-700 text-white rounded-lg lg:w-1/2 mt-3"
          >
            {buttonForm.servicio2 ? "ver servicio" : "consultar"}
          </button>
        </div>
        <div className="flex flex-col flex-wrap justify-center items-center cursor-default lg:px-5 py-10 border-b-solid border-b-2 border-slate-400   lg:mx-10 my-3">
          {buttonForm.servicio3 ? (
            <FormControlServicios  servicio={buttonForm.servicio}/>
          ) : (
            <div>
              <p className="font-bold text-2xl text-center pb-10">Servicio 3</p>
              <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center">
              {textos.servicio3.map((text) => {
                return (
                  <div
                    key={Math.random()}
                    className="flex flex-row justify-start items-center bg-hpampa m-1 rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md w-4/5 lg:w-2/5 lg:px-3 py-4"
                  >
                    <GoTriangleRight className="text-white" />
                    <p className="text-white">{text}</p>
                  </div>
                );
              })}
              </div>
            </div>
          )}
          <button
            onClick={() =>
              setButtonForm({ ...buttonForm, servicio3: !buttonForm.servicio3, servicio1: false, servicio2: false, servicio: 'Servicio 3' })
            }
            className="py-3 my-3 px-5 bg-gray-dark hover:bg-slate-700 text-white rounded-lg mt-3 lg:w-1/2 "
          >
            {buttonForm.servicio3 ? "ver servicio" : "consultar"}
          </button>
        </div>
        <div className="flex flex-col flex-wrap justify-center items-center cursor-default  border-slate-400 lg:px-5 py-10 lg:mx-10 my-3">
          {buttonForm.servicio1 ? (
            <FormControlServicios servicio={buttonForm.servicio}/>
          ) : (
            <div>
              <p className="font-bold text-2xl text-center pb-10">Servicio 1</p>
              <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center">
              {textos.servicio1.map((text) => {
                return (
                  <div
                    key={Math.random()}
                    className="flex flex-row justify-start items-center bg-hpampa m-1 rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md w-4/5 lg:w-2/5 px-3 py-4"
                  >
                    <GoTriangleRight className="text-white" />
                    <p className="text-white">{text}</p>
                  </div>
                );
              })}
              </div>
            </div>
          )}
          <button
            onClick={() =>
              setButtonForm({ ...buttonForm, servicio1: !buttonForm.servicio1, servicio2: false, servicio3: false, servicio: 'Servicio 1' })
            }
            className="py-3 px-5 bg-gray-dark hover:bg-slate-700 text-white rounded-lg mt-3 lg:w-1/2"
          >
            {buttonForm.servicio1 ? "ver servicio" : "consultar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderConsultoria;
