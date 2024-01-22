import { useFormik } from "formik";
import React, { useRef } from "react";
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import 'dotenv/config';

const FormControlServicios = ({servicio}) => {
  const formRef = useRef(null);
  const formik = useFormik({
    initialValues: {
      nombreEmpresa : '',
      nombreContacto: '',
      email: '',
      pais: '',
      telefono: undefined,
      consulta: ''
    },
    validationSchema: Yup.object({
      nombreEmpresa: Yup.string().required('El campo Nombre Empresa es requerido').max(20, 'El campo Nombre Empresa no puede tener mas de 20 caracteres'),
      nombreContacto: Yup.string().required('El campo Nombre Contacto es requerido').max(20, 'El campo Nombre Contacto no puede tener mas de 20 caracteres'),
      email: Yup.string().email('El email no es valido').required('El campo Email es requerido'),
      pais: Yup.string().required('El campo País es requerido'),
      telefono: Yup.number(),
      consulta: Yup.string().required('El campo Consulta es requerido').max(300, 'El campo Consulta no puede tener mas de 300 caracteres')
    }),
    onSubmit: values =>{
      try {
       emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID_EMAILJS, process.env.NEXT_PUBLIC_TAMPLATE_ID_SERVICIO_EMAILJS, formRef.current, process.env.NEXT_PUBLIC_PK_EMAILJS)
        .then(res=>console.log(res))
        .catch(err=>console.log(err)) 
      } catch (error) {
        console.log(error)
      }
        
      
    }
  })
  return (
    <form ref={formRef} className="w-full" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-around w-full">
        <div className='flex flex-col w-4/5 lg:w-2/5'> 
            <input
            type="text"
            id="nombreEmpresa"
            name='nombreEmpresa'
            className={`mb-5 bg-transparent border-t-transparent border-l-transparent border-r-transparent ${formik.touched.nombreEmpresa && formik.errors.nombreEmpresa ? 'placeholder:text-red-500 border-red-500' : 'border-slate-800'} placeholder:text-slate-700   text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5`}
            placeholder={`${formik.touched.nombreEmpresa && formik.errors.nombreEmpresa ? formik.errors.nombreEmpresa :'Nombre Empresa'}`}
            value={formik.values.nombreEmpresa}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
        
        </div>
        <div className='flex flex-col w-4/5 lg:w-2/5'>
            <input
            type="text"
            id="nombreContacto"
            name='nombreContacto'
            className={`mb-5 bg-transparent border-t-transparent border-l-transparent border-r-transparent ${formik.touched.nombreContacto && formik.errors.nombreContacto ? 'placeholder:text-red-500 border-red-500' : 'border-slate-800'} placeholder:text-slate-700   text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5`}
            placeholder={`${formik.touched.nombreContacto && formik.errors.nombreContacto ? formik.errors.nombreContacto :'Nombre Contacto'}`}
            value={formik.values.nombreContacto}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            
        </div>
        <div className='flex flex-col w-4/5 lg:w-2/5'>
            <input
            type="email"
            id="email"
            name='email'
            className={`mb-5 bg-transparent border-t-transparent border-l-transparent border-r-transparent ${formik.touched.email && formik.errors.email ? 'placeholder:text-red-500 border-red-500' : 'border-slate-800'} placeholder:text-slate-700   text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5`}
            placeholder={`${formik.touched.email && formik.errors.email ? formik.errors.email :'Email'}`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
        </div>
        <div className='flex flex-col w-4/5 lg:w-2/5'>
            <input
            type="text"
            id="pais"
            name='pais'
            className={`mb-5 bg-transparent border-t-transparent border-l-transparent border-r-transparent ${formik.touched.pais && formik.errors.pais ? 'placeholder:text-red-500 border-red-500' : 'border-slate-800'} placeholder:text-slate-700   text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5`}
            placeholder={`${formik.touched.pais && formik.errors.pais ? formik.errors.pais :'País'}`}
            value={formik.values.pais}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
        
        </div>
         <div className='flex flex-col w-4/5 lg:w-2/5'>
            <input
            type="tel"
            id="telefono"
            name='telefono'
            className={`mb-5 bg-transparent border-t-transparent border-l-transparent border-r-transparent ${formik.touched.telefono && formik.errors.telefono ? 'placeholder:text-red-500 border-red-500' : 'border-slate-800'} placeholder:text-slate-700   text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5`}
            placeholder={`${formik.touched.telefono && formik.errors.telefono ? formik.errors.telefono :'Telefono'}`}
            value={formik.values.telefono}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
     
         </div>
         <input
            name='servicio'
            value={servicio} 
            className="inputOculto"
         />
        <div className='flex flex-col w-4/5 lg:w-2/5'>
            <textarea
            type="text"
            id="consulta"
            name='consulta'
            className={`mb-5 bg-transparent border-t-transparent border-l-transparent border-r-transparent ${formik.touched.consulta && formik.errors.consulta ? 'placeholder:text-red-500 border-red-500' : 'border-slate-800'} placeholder:text-slate-700   text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full lg:p-2.5`}
            placeholder={`${formik.touched.consulta && formik.errors.consulta ? formik.errors.consulta :'Consulta'}`}
            value={formik.values.consulta}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
           
        </div>
        <button
          type="submit"
          className="text-white bg-gray-dark hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl  px-5 py-2.5 w-1/2 text-center"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default FormControlServicios;
