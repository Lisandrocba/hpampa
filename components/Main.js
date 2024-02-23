import React from "react";

const Main = () => {
  return (
    <div className="pt-10">
      <h5 className=" text-center text-3xl lg:text-5xl lg:mb-20">
        <span className="lg:text-6xl text-hpampa">N</span>uestra{" "}
        <span className="lg:text-6xl text-hpampa">E</span>mpresa
      </h5>
      <div className="flex flex-col lg:flex-row lg:justify-around lg:pt-5 lg:mb-10">
        <p className="basis-5/12 lg:text-2xl text-slate-900 px-5 lg:pb-28 pt-5 mb-10 text-center">
          <span className="text-4xl text-hpampa">S</span>omos una empresa
          integrada por expertos en negocios internacionales con más de dos
          décadas de experiencia. Nuestras operaciones se extienden desde
          nuestra sede principal en España hasta nuestras bases operativas en
          Argentina y Brasil, respaldadas por un equipo de comerciales
          estratégicamente ubicados en Estador Unidos, Uruguay y China.
        </p>
        <div className="basis-7/12 text-center">
          <div className="px-5 pb-10 pt-10 bg-slate-900 lg:text-2xl text-slate-200 ml-5 lg:ml-20 rounded-tl-md rounded-bl-md ">
            <p><span className="text-4xl text-hpampa">R</span>epresentamos a más de
            40 empresas productoras de alimentos diversificados en bebidas,
            frutos secos, carnes, legumbres, alimentos diarios. Participamos en
            las ferias más importantes del sector como ANUGA, IFE, ALIMENTARIA,
            PROWEIN, SIAL, ESPACIO FOOD & SERVICE, APAS Y GULFOOD.</p>
          <p>
            Estamos convencidos de que podemos ser su proveedor estratégico para
            expandir sus negocios internacionales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
