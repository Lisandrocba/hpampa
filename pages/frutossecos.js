import CartProductos from '@/components/CartProductos'
import NavBarSectores from '@/components/NavBarSectores'
import React from 'react'

const FrutosSecos = () => {
  return (
    <div>
      <NavBarSectores />
      <div className="flex justify-center items-start flex-wrap my-10">
      <CartProductos
          img="https://i.imgur.com/yIVrbsh.png"
          productos={[
            "Maní Roruka tostado sin sal linea gourmet",
            "Maní Roruka tostado con sal linea gourmet",
            "Té negro Ceylon con azahar",
            "Té negro con especias y hierbas",
            "Té rojo con chocolate & frutos rojos",
            "Arandanos en Polvo",
          ]}
          black={true}
        />
         <CartProductos
          img="https://i.imgur.com/5hCgg50.png"
          productos={[
            "Nuez Mammoth Halves",
            "Nuez Junior Mammoth Halves",
            "Nuez Extra large Halves",
            "Nuez Medium Peces",
            "Nuez Large/medium Peces",
            "Nuez Mammoth Peces",
          ]}
          black={true}
        />
         <CartProductos
          img="https://i.imgur.com/2Uqaimp.png"
          productos={[
            "Ciruelas Desecadas",
            "Pasas de Uva",
            "Puré de ciruelas",
            "Pasas de Uva",
          ]}
          imgW={250}
        />
      </div>
    </div>
  )
}

export default FrutosSecos