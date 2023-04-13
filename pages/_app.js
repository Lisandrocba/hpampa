import { AdminProvider } from '@/context/AdminContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <AdminProvider>
      <Component {...pageProps} />
    </AdminProvider>
)}
