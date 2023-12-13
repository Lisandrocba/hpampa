import CartProductos from '@/components/CartProductos'
import NavBarSectores from '@/components/NavBarSectores'
import React from 'react'

const Carnes = () => {
  return (
    <div>
      <NavBarSectores />
      <div className="flex justify-center items-start flex-wrap my-10">
        <CartProductos 
          img='https://i.imgur.com/GGrNA9v.png'
          productos={[
            'Colita de cuadril',
            'Tapa de cuadril',
            'Bife angosto',
            'Ojo de bife',
            'Corazon de Cuadril',
            'Peceto',
            'Lomo',
            'Nalga'
          ]}
          name='vacuna'
          sector='carnes'
        />
          <CartProductos 
          img='https://i.imgur.com/u5Eb3UN.png'
          productos={[
            'Ojo de Lomo',
            'Costilla',
            'Lomo',
            'Pierna con hueso',
            'Lomo con Hueso',
            'Carré'
          ]}
          name='cerdo'
          sector='carnes'
        />
           <CartProductos 
          img='https://i.imgur.com/IvNgi1a.png'
          productos={[
            'Pollo Entero',
            'Fillet de Pechuga',
            'Pata de Pollo',
            'Cuarto Trasero ',
            'Patamuslo',
            'Corazón'
          ]}
          name='aviar'
          sector='carnes'
        />
         <CartProductos 
          img='https://i.imgur.com/hASBg5e.png'
          productos={[
            'Cordero',
            'Cabrito',
            'Cabra',
            'Mutton',
            'Oveja'
          ]}
          name='ovino'
          sector='carnes'
        />
         <CartProductos 
          img='https://i.imgur.com/r5eFxdz.png'
          productos={[
            'Merluza',
            'Corvina',
            'Langostino',
            'Calamar'
          ]}
         name='pescados'
         sector='carnes'
        />

      </div>
    </div>
  )
}

export default Carnes
