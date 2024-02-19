import CartProductos from '@/components/CartProductos'
import NavBarSectores from '@/components/NavBarSectores'
import React from 'react'

const FrutosSecos = () => {
  return (
    <div>
      <NavBarSectores />
      <div className="flex justify-center items-stretch flex-wrap gap-5">
      <CartProductos
          img="https://i.imgur.com/YDdzjei.png"
          productos={[
            "Maní Roruka tostado sin sal linea gourmet",
            "Maní Roruka tostado con sal linea gourmet",
          ]}
          name='mani'
          sector='frutossecos'
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
          name='nueces'
          sector='frutossecos'
        />
         <CartProductos
          img="https://i.imgur.com/2Uqaimp.png"
          productos={[
            "Ciruelas Desecadas",
            "Pasas de Uva",
            "Puré de ciruelas",
            "Pasas de Uva",
          ]}
          name='pasas'
          sector='frutossecos'
        />
      </div>
    </div>
  )
}

export default FrutosSecos