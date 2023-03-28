import Contacto from '@/components/Contacto'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Seccion from '@/components/Seccion'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>HPampa - comercio exterior</title>
        <meta name="description" content="Depósito Aduanero con Servicios de Apoyo Logístico para servicio de Importación, Exportación y Tránsito." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <Main />
        <Seccion />
        <Contacto />
      </main>
    </>
  )
}
