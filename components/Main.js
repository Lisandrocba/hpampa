import React from 'react'

const Main = () => {
  return (
    <div>
        <h5 className="text-lg m-8">Nuestra empresa</h5>
        <div className="flex flex-row justify-center ml-16 mr-16 mb-7">
            <p className="basis-2/6 text-sm text-gray-dark pr-3">
                Somos una empresa conformada por profesionales de comercio exterior, 
                dedicada al desarrollo comercial de clientes, mercados y proveedores de insumos como
                así también de productos terminados.
            </p>
            <div className="basis-4/6">
                <p className="mb-2 text-sm text-gray-dark">
                    En HPampa contamos con el respaldo de los más de 18 años de experiencia de TEBSA S.R.L.,
                    empresa Argentina con más de 100 participaciones en misiones y ferias internacionales 
                    en más de 30 países.
                </p>
                <p className="text-sm text-gray-dark">
                    Estamos ubicados en la provincia de Zaragoza, España y contamos con bases operativas en Argentina, 
                    Brasil, Uruguay, Estados Unidos y China.
                </p>
            </div>
        </div>
        <div className="flex flex-col bg-hpampa mb-0 pb-0">
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
