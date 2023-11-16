import CartProductos from "@/components/CartProductos";
import NavBarSectores from "@/components/NavBarSectores";
import React from "react";

const Bebidas = () => {
  return (
    <div>
      <NavBarSectores />
      <div className="flex justify-center items-center flex-wrap my-10">
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
          black={true}
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
          black={true}
          imgW={250}
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
          black={true}
          imgW={250}
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
        />
        <CartProductos
          img="https://i.imgur.com/cQPhVf6.png"
          productos={[
            "Vino Finca Gabriel",
            "Vino Privado Jorge Rubio Reserva Malbec",
            "Vino Finca Gabriel ED. Especial Malbec",
            "Vino Finca Gabriel ED. Especial Tinto Tardio",
            "Vino Gran Reserva Bicentenario Malbec",
            "Vino Finca Gabriel Dulce Natural",
            "Vino Finca Gabriel ED. Especial Rosé Malbec",
            "Espumante Finca Gabriel Brut Nature",
            "Espumante Privado Brut Nature",
          ]}
          imgW={300}
          black={true}
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
          black={true}
        />
      </div>
    </div>
  );
};

export default Bebidas;
