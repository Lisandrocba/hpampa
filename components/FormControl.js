import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import "dotenv/config";

const FormControl = () => {
  const [mensaje, setMensaje] = useState(false);
  const [cuerpoMensaje, setCuerpoMensaje] = useState("");
  const formRef = useRef(null);
  const formik = useFormik({
    initialValues: {
      nombreEmpresa: "",
      nombreContacto: "",
      email: "",
      pais: "",
      telefono: undefined,
      consulta: "",
    },
    validationSchema: Yup.object({
      nombreEmpresa: Yup.string()
        .required("El campo es requerido")
        .max(20, "El campo no puede tener mas de 20 caracteres"),
      nombreContacto: Yup.string()
        .required("El campo es requerido")
        .max(20, "El campo no puede tener mas de 20 caracteres"),
      email: Yup.string()
        .email("El email no es valido")
        .required("El campo es requerido"),
      pais: Yup.string().required("El campo es requerido"),
      telefono: Yup.number(),
      consulta: Yup.string()
        .required("El campo es requerido")
        .max(300, "El campo no puede tener mas de 300 caracteres"),
    }),
    onSubmit: (values) => {
      try {
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID_EMAILJS,
            process.env.NEXT_PUBLIC_TAMPLATE_ID_EMAILJS,
            formRef.current,
            process.env.NEXT_PUBLIC_PK_EMAILJS
          )
          .then((res) => {
            if (res.status == 200) {
              setCuerpoMensaje(
                "Gracias por su consulta. En la brevedad nos pondremos en contacto."
              );
              setMensaje(true);
              console.log(res.status);
            } else {
              setCuerpoMensaje("Error al enviar el mensje, intente mas tarde.");
              setMensaje(true);
            }
          })
          .catch((err) => {
            setCuerpoMensaje("Error al enviar el mensje, intente mas tarde.");
            setMensaje(true);
          });
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <form ref={formRef} className="w-full" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col items-center justify-center w-full">
        <input
          type="text"
          id="nombreEmpresa"
          name="nombreEmpresa"
          className="mb-5 bg-transparent border-t-transparent border-l-transparent border-r-transparent placeholder:text-slate-700  border-slate-800 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
          placeholder="Nombre compañía"
          value={formik.values.nombreEmpresa}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.nombreEmpresa && formik.errors.nombreEmpresa ? (
          <div className="my-2 w-full bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
            <p className="font-bold">Error</p>
            <p>{formik.errors.nombreEmpresa}</p>
          </div>
        ) : null}
        <input
          type="text"
          id="nombreContacto"
          name="nombreContacto"
          className="mb-5  bg-transparent border-t-transparent border-l-transparent border-r-transparent placeholder:text-slate-700 border-slate-800 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
          placeholder="Nombre de contacto"
          value={formik.values.nombreContacto}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.nombreContacto && formik.errors.nombreContacto ? (
          <div className="my-2 w-full bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
            <p className="font-bold">Error</p>
            <p>{formik.errors.nombreContacto}</p>
          </div>
        ) : null}
        <input
          type="email"
          id="email"
          name="email"
          className="mb-5  bg-transparent border-t-transparent border-l-transparent border-r-transparent placeholder:text-slate-700 border-slate-800 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="my-2 w-full bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
            <p className="font-bold">Error</p>
            <p>{formik.errors.email}</p>
          </div>
        ) : null}
        <input
          type="text"
          id="pais"
          name="pais"
          className="mb-5  bg-transparent border-t-transparent border-l-transparent border-r-transparent placeholder:text-slate-700 border-slate-800 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
          placeholder="País"
          value={formik.values.pais}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.pais && formik.errors.pais ? (
          <div className="my-2 w-full bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
            <p className="font-bold">Error</p>
            <p>{formik.errors.pais}</p>
          </div>
        ) : null}
        <input
          type="tel"
          id="telefono"
          name="telefono"
          className="mb-5  bg-transparent border-t-transparent border-l-transparent border-r-transparent placeholder:text-slate-700 border-slate-800 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
          placeholder="Teléfono"
          value={formik.values.telefono}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.telefono && formik.errors.telefono ? (
          <div className="my-2 w-full bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
            <p className="font-bold">Error</p>
            <p>{formik.errors.telefono}</p>
          </div>
        ) : null}
        <textarea
          type="text"
          id="consulta"
          name="consulta"
          className="mb-5 bg-transparent border-t-transparent border-l-transparent border-r-transparent placeholder:text-slate-700 border-slate-800 text-gray-900 text-xl border-2 focus:border-b-blue-500 focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:outline-none focus:ring-transparent block w-full p-2.5"
          placeholder="Escriba su consulta"
          value={formik.values.consulta}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.consulta && formik.errors.consulta ? (
          <div className="my-2 w-full bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
            <p className="font-bold">Error</p>
            <p>{formik.errors.consulta}</p>
          </div>
        ) : null}
        {mensaje ? (
          <p className="px-5 py-2.5 mt-5 mb-10 text-lime-800 text-lg">
            {cuerpoMensaje}
          </p>
        ) : (
          <button
            type="submit"
            className="text-white bg-gray-dark hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl  px-5 py-2.5 mt-5 mb-10 w-3/4 text-center"
          >
            Enviar
          </button>
        )}
      </div>
    </form>
  );
};

export default FormControl;
