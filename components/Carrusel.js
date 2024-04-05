import "flowbite";
import Image from "next/image";
import con1 from "../public/Contenedor1.jpg";
import con3 from "../public/Contenedor2.jpg";
import con2 from "../public/Contenedor3.jpg";
import React, { useEffect, useState } from "react";

const Carrusel=React.memo(()=> {
  const imgs = [
    {
        img: con1,
        msj: "Exportación"
    },
    {
        img: con2,
        msj: "Importación"
    },
    {
        img: con3,
        msj: "Asesoramiento"
    },
  ]
  
  const [index, setIndex] = useState(0);


    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex === imgs.length - 1 ? 0 : prevIndex + 1));
      }, 3000);
  
      return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  
    }, []); 
  

  const siguiente = () => {
    const siguienteImg = index === imgs.length - 1;
    const newIndex = siguienteImg ? 0 : index + 1;
    setIndex(newIndex);
  };

  const anterior = () => {
    const siguienteImg = index === 0;
    const newIndex = siguienteImg ? imgs.length - 1 : index - 1;
    setIndex(newIndex);
  };
  
  return (
    <div className="w-full carousel-container relative">
      <p className="text-slate-200 text-3xl lg:text-8xl font-bold absolute z-10 inset-x-0 top-[40%] text-center cursor-default">{imgs[index].msj}</p>
      <Image
        src={imgs[index].img}
        className="w-full h-96 lg:h-screen object-cover contrast-50 "
        alt="..."
        width='5000'
        loading='lazy'
        
      />
    </div>
  );
})

export default Carrusel;

