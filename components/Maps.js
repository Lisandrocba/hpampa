import { Loader } from '@googlemaps/js-api-loader'
import React, { useEffect, useRef } from 'react'

const Map = () => {

  const mapRef = useRef(null)

  useEffect(()=>{
    const initMap =async()=>{
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_KEY_MAPS,
          VERSION: 'weekly',
        })

        const {Map} = await loader.importLibrary('maps')

        const posicion = {
          lat: parseFloat(42.62890695315134), 
          lng: parseFloat(-0.3217958220048078), 
        }

        const mapOptions = google.maps.MapOptions = {
          center: posicion,
          zoom: 13,
          mapId: 'M',
        }

        const map = new Map(mapRef.current, mapOptions)
    }

    initMap()
  }, [])

  return (
    <div className='w-42 '>
      <div ref={mapRef} style={{ height: '200px', width: '100%' }}></div>
    </div>
  )
}

export default Map
