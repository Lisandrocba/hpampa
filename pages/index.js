import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Seccion from '@/components/Seccion'
import TextBucle from '@/components/TextBucle'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-zinc-800 ">
      <Head>
        <title>HPampa - comercio exterior</title>
        <meta name="description" content="Depósito Aduanero con Servicios de Apoyo Logístico para servicio de Importación, Exportación y Tránsito." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <TextBucle />
        <Main />
        <Seccion />
        <Contacto />
        <Footer />
      </main>
    </div>
  )
}
