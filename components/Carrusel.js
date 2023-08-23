import "flowbite";
import Image from "next/image";
import con2 from "../public/conten2.jpg";
import con1 from "../public/contenedores2.jpg";
import con3 from "../public/pexels-pixabay-163726.jpg";
import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

function Carrusel() {
  const imgs = [
    {
        img: con1,
        msj: "Ejemplo mensaje 1"
    },
    {
        img: con2,
        msj: "Ejemplo mensaje largo 2"
    },
    {
        img: con3,
        msj: "Ejemplo mensaje 3"
    },
  ]
  
  const [index, setIndex] = useState(0);

  const siguiente = () => {
    const siguienteImg = index === imgs.length - 1;
    const newIndex = siguienteImg ? 0 : index + 1;
    setIndex(newIndex);
    console.log(index);
  };

  const anterior = () => {
    const siguienteImg = index === 0;
    const newIndex = siguienteImg ? imgs.length - 1 : index - 1;
    setIndex(newIndex);
    console.log(index);
  };

  return (
    <div className="carousel-container relative mt-12">
      <FiChevronLeft
        onClick={anterior}
        className="text-black/50 text-4xl absolute z-20 top-[40%] bg-white/40 rounded-full ml-2 cursor-pointer"
      />

      <FiChevronRight
        onClick={siguiente}
        className="text-black/50 absolute z-20 top-[40%] text-4xl right-0 mr-2 bg-white/40 rounded-full cursor-pointer"
      />
        <p style={{textShadow: '5px 5px 5px #000' }} className="text-gray-light text-2xl absolute z-10 inset-x-0 top-[40%] text-center font-bold">{imgs[index].msj}</p>
      <Image
        src={imgs[index].img}
        className="h-40 object-cover object-center rounded-lg contrast-50 "
        alt="..."
      />
    </div>
  );
}

export default Carrusel;

/* const Carrusel = () => {
  return (
    <div
      id="controls-carousel"
      class="relative w-full mb-4"
      data-carousel="static"
    >
      <div class="relative h-56 overflow-hidden rounded-lg md:h-48">
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            src={con2}
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-[90%] left-1/2"
            alt="..."
          />
        </div>
        <div
          class="hidden duration-700 ease-in-out"
          data-carousel-item="active"
        >
          <Image
            src={con2}
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-[90%] left-1/2"
            alt="..."
          />
          <p class="absolute text-white text-xl top-1/2 left-[42%] text-center">
            Hola mundo
          </p>
        </div>
        

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
            src={con2}
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-dark/30 group-hover:bg-gray-dark/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white/20 group-focus:outline-none">
          <svg
            class="w-4 h-4 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-dark/30 group-hover:bg-gray-dark/50 group-focus:ring-4 group-focus:ring-white/20 group-focus:outline-none">
          <svg
            class="w-4 h-4 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carrusel; */
