import CartProductos from "@/components/CartProductos";
import NavBarSectores from "@/components/NavBarSectores";
import React from "react";

const Bebidas = () => {
  return (
    <div>
      <NavBarSectores />
      <div className="flex justify-center items-start flex-wrap my-10">
        <CartProductos
          img="https://i.imgur.com/WeUSrHN.png"
          productos={[
            "Vino Nucha Malbec Orgánico",
            "Vino Mimi",
            "Vino Malbec Varietal",
            "Vino Chardonnay Varietal",
            "Vino Cabernet Sauv. Cask",
            "Vino Tempranillo Cask",
          ]}
          name='araujo'
          sector='producto'
        />
         <CartProductos
          img="https://i.imgur.com/f46OM9T.png"
          productos={[
            "Gin Blue Edition",
            "Gin Red Fruits",
            "Gin Lima & Lemongrass",
            "Gin Cardamomo & Lemongras",
            "Vino Malbec 23 by Aconcagua Distillery",
            "Vino Malbec 23 by Aconcagua Distillery",
          ]}
          name='aconcagua'
          sector='producto'
        />
        <CartProductos
          img="https://i.imgur.com/F84izGL.png"
          productos={[
            "Vino Carelli Gran Reserva Malbec 2006",
            "Vino Carelli Malbec",
            "Vino Angel Malbec Reserve",
            "Vino Carla Chiaro",
            "Vino Carelli Madero Reserve",
            "Vino Carelli Madero",
          ]}
          imgW={250}
          name='carelli'
          sector='producto'
        />
         <CartProductos
          img="https://i.imgur.com/VqV58K3.png"
          productos={[
            "Vino Master Blend",
            "Vino Malbec Numerado",
            "Vino Prestige Red Blend Reserva",
            "Vino Fangio Legend",
            "Vino Fangio Bi-varietal",
            "Vino Merlot Roble I.G",
            "Vino Cosecha Tardía",
            "Espumante Extra Brut",
            "Espumante Champenoise",
          ]}
          imgW={250}
          name='bournett'
          sector='producto'
        />
         <CartProductos
          img="https://i.imgur.com/EQKRmZj.png"
          productos={[
            "Vino Calathus Gran Reserva Malbec",
            "Vino Calathus Malbec",
            "Vino Calathus Pinot Noir",
            "Vino Kilhix Malbec",
            "Vino Vhimini Malbec",
            "Vino Vade Retro Cabernet Franc",
            "Vino Corazón Satánico Malbec",
          ]}
          imgW={250}
          name='doncarlos'
          sector='producto'
        />
        <CartProductos
          img="https://i.imgur.com/kdwGQgh.png"
          productos={[
            "Vino El Nevado Malbec Reserva",
            "Vino El Naufrago Malbec",
            "Vino El Naufrago Blanco Dulce",
            "Vino Aturdido Malbec",
            "Vino Aturdido Blanco Dulce",
          ]}
          imgW={250}
          name='elnevado'
          sector='producto'
        />
        <CartProductos
          img="https://i.imgur.com/cQPhVf6.png"
          productos={[
            "Finca Gabriel",
            "Privado Jorge Rubio Reserva Malbec",
            "Finca Gabriel ED. Especial Malbec",
            "Finca Gabriel ED. Especial Tinto Tardio",
            "Gran Reserva Bicentenario Malbec",
            "Finca Gabriel Dulce Natural",
            "Finca Gabriel ED. Especial Rosé Malbec",
            "Finca Gabriel Brut Nature",
            "Privado Brut Nature",
          ]}
          imgW={300}
          name='jorgerubio'
          sector='producto'
        />
         <CartProductos
          img="https://i.imgur.com/keR7hYv.png"
          productos={[
            "Vino Uko Old Vines",
            "Vino Mister Uko",
            "Vino Uko Select Vineyards",
            "Vino Uko Estate",
          ]}
          imgW={200}
          name='uko'
          sector='producto'
        />
        <CartProductos
          img="https://i.imgur.com/iY3B6JI.png"
          productos={[
            "Prieto Marini",
            "Pata i' Lana",
            "Pedro Moises",
          ]}
          imgW={200}
          name='eltransito'
          sector='producto'
        />
      </div>
    </div>
  );
};

export default Bebidas;
