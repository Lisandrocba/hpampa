import 'flowbite';
import Image from 'next/image';
import con1 from "../public/contenedores.jpg"
import con2 from "../public/contenedores2.jpg"
import con3 from "../public/contenedores3.jpg"


const Carrusel = () => {
  return (
    <div className="pl-3 pr-3">
        {/* <div id="controls-carousel" class="relative w-full" data-carousel="static">
            <div class="relative h-56 overflow-hidden rounded-lg md:h-56">
                <div class="flex duration-700 ease-in-out justify-center" data-carousel-item="active">
                    <Image width={400} height={200} src={con1} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    <p style={{textShadow: "2px 2px 3px #0c4a6e"}} className="tracking-[1rem] text-5xl text-blue absolute bottom-24">IMPORTACIONES</p>
                </div>
                <div class="flex duration-700 ease-in-out justify-center" data-carousel-item="active">
                    <Image width={400} height={200} src={con2} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    <p className="tracking-[1rem] text-5xl text-blanco absolute bottom-24">EXPORTACIONES</p>
                </div>
                <div class="flex duration-700 ease-in-out justify-center" data-carousel-item="active">
                    <Image width={400} height={200} src={con3} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    <p className="tracking-[1rem] text-5xl text-blanco absolute bottom-24">ASESORAMIENTO</p>
                </div>
            </div>
            <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div> */}

    </div>
  )
}

export default Carrusel
