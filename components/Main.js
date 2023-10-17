import React from 'react'

const Main = () => {
  return (
    <div className=" pt-10 ">
        <h5 className=" text-center text-5xl mb-20"><span className='text-6xl text-hpampa'>N</span>uestra <span className='text-6xl text-hpampa'>E</span>mpresa</h5>
        <div className="flex flex-row justify-around pt-5 mb-10">
            <p className="basis-5/12 text-2xl text-slate-900 px-5 pb-28 pt-16 mb-10">
                <span className='text-4xl text-hpampa'>S</span>omos una empresa conformada por profesionales de comercio exterior, 
                dedicada al desarrollo comercial de clientes, mercados y proveedores de insumos como
                así también de productos terminados.
            </p>
            <div className="basis-7/12">
                <p className="px-20 pb-28 pt-24 bg-slate-900 text-2xl text-slate-200 ml-20 rounded-tl-md rounded-bl-md ">
                <span className='text-4xl text-hpampa'>E</span>stamos ubicados en la provincia de Zaragoza, España y contamos con bases operativas en Argentina, 
                    Brasil, Uruguay, Estados Unidos y China.
                </p>
            </div>
        </div>
        <div className="flex flex-col bg-hpampa mb-0 pb-0 border-t-yellow border-t-8">
            <h3 className="text-xl text-blanco ml-6 p-3 pb-7">Servicio de consultoria</h3>
            <div className="flex flex-row bg-hpampa mb-0 pb-0">
            <div className="basis-1/4 p-6 m-1 border border-blanco text-blanco rounded-lg shadow">
                <ul className="list-disc text-ssm ">
                    <li>Desarrollo de clientes y mercados.</li>
                    <li>Desarrollo de proveedores de productos y/o insumos.</li>
                    <li>Control de producción en proveedores del exterior.</li>
                    <li>Envío de muestras a clientes del exterior.</li>
                    <li>Exportación por cuenta y orden de terceros.</li>
                </ul>
            </div>
            <div className="basis-1/4 p-6 m-1 border border-blanco text-blanco rounded-lg shadow">
                <ul className="list-disc text-ssm">
                    <li>Participación en misiones propias e inversas.</li>
                    <li>Promoción a través de comerciantes propios.</li>
                    <li>Ingreso, egreso y liquidación de divisas.</li>
                    <li>Confección y control de documentos.</li>
                    <li>Tramites en registro de importadores/exportadores.</li>
                </ul>
            </div>
                <div className="p-6 basis-1/4 m-1 border border-blanco text-blanco rounded-lg shadow">
                    <ul className="list-disc text-ssm">
                        <li>Tramitación de certificados y autorizaciones.</li>
                        <li>Asesoramiento sobre el modo de transporte.</li>
                        <li>Supervisión física de los embarques.</li>
                        <li>Coordinación y seguimiento de embarque / destino.</li>
                        <li>Seguimiento de los reintegros a la exportación.</li>
                    </ul>
                </div>
                <div className="p-6 basis-1/4 m-1 border border-blanco text-blanco rounded-lg shadow">
                    <ul className="list-disc text-ssm">
                        <li>Análisis tributario y aduanero.</li>
                        <li>Confección y presentación de SIMI y LNA.</li>
                        <li>Planificación y generación de ordenes de compras.</li>
                        <li>Gestión de certificaciones previas a importación.</li>
                        <li>Control de importaciones temporales.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
