import React, { forwardRef } from 'react'
import FormControl from './FormControl'

const Contacto = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="mx-2 mt-5 mb-5 lg:mx-36">
        <h3 className="text-2xl lg:text-5xl pt-3 pb-7 mb-3 mt-10">Contáctanos:</h3>
        <FormControl />
    </div>
  )
})

export default Contacto
