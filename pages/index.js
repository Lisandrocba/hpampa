import Carrusel from '@/components/Carrusel'
import Header from '@/components/Header'
import Main from '@/components/Main'
import NavBar from '@/components/NavBar'
import Seccion from '@/components/Seccion'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>HPampa - comercio exterior</title>
        <meta name="description" content="Depósito Aduanero con Servicios de Apoyo Logístico para servicio de Importación, Exportación y Tránsito." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;1,400&display=swap" rel="stylesheet"></link>
      </Head>
      <main>
        <Header />
        <Main />
        <Seccion />
      </main>
    </>
  )
}
