import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Seccion from '@/components/Seccion'
import Head from 'next/head'
import { useRef } from 'react'


export default function Home() {

  const miComponenteRef = useRef(null);

  const scrollToComponent = () => {
    if (miComponenteRef.current) {
      miComponenteRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Head>
        <title>HPampa - comercio exterior</title>
        <meta name="description" content="Depósito Aduanero con Servicios de Apoyo Logístico para servicio de Importación, Exportación y Tránsito." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header scrollToComponent={scrollToComponent}/>
        <Main />
        <Seccion />
        <Contacto ref={miComponenteRef}/>
        <Footer />
      </main>
    </div>
  )
}
