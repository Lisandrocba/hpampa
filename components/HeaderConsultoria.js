import React from 'react'

const textos = [
    '- Desarrollo de clientes y mercados.',
    '- Desarrollo de proveedores de productos y/o insumos.',
    '- Control de producción en proveedores del exterior.',
    '- Envío de muestras a clientes del exterior.',
    '- Exportación por cuenta y orden de terceros.',
    '- Participación en misiones propias e inversas.',
    '- Promoción a través de comerciantes propios.',
    '- Ingreso, egreso y liquidación de divisas.',
    '- Confección y control de documentos.',
    '- Tramites en registro de importadores/exportadores.',
    '- Tramitación de certificados y autorizaciones.',
    '- Asesoramiento sobre el modo de transporte.',
    '- Supervisión física de los embarques.',
    '- Coordinación y seguimiento de embarque / destino.',
    '- Seguimiento de los reintegros a la exportación.',
    '- Análisis tributario y aduanero.',
    '- Confección y presentación de SIMI y LNA.',
    '- Planificación y generación de ordenes de compras.',
    '- Gestión de certificaciones previas a importación.',
    '- Control de importaciones temporales.'
]

const HeaderConsultoria = () => {
  return (
    <div>
        <h2 className="text-5xl pt-3 pb-7 mb-3 mt-10 text-center"><span className='text-6xl text-hpampa'>S</span>ervicios de consultoria</h2>
        <div className='flex flex-row flex-wrap justify-center cursor-default'>
        { textos.map(text => {
            return(
                <div className='bg-hpampa m-1 rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md border-black border-solid border-2'>
                    <p className=' mx-5 my-3 text-slate-800'>{text}</p>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default HeaderConsultoria
