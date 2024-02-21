import CartProductos from "@/components/CartProductos";
import NavBarSectores from "@/components/NavBarSectores";
import React from "react";

const Bebidas = () => {
  return (
    <div>
      <NavBarSectores />
      <div className="flex justify-center items-stretch flex-wrap gap-5">
        <CartProductos
          img="https://i.imgur.com/WeUSrHN.png"
          name='araujo'
          sector='producto'
        />
         <CartProductos
          img="https://i.imgur.com/f46OM9T.png"
          name='aconcagua'
          sector='producto'
        />
        <CartProductos
          img="https://i.imgur.com/F84izGL.png"
          imgW={250}
          name='carelli'
          sector='producto'
        />
         <CartProductos
          img="https://i.imgur.com/VqV58K3.png"
          imgW={250}
          name='bournett'
          sector='producto'
        />
         <CartProductos
          img="https://i.imgur.com/EQKRmZj.png"
          imgW={250}
          name='doncarlos'
          sector='producto'
        />
        <CartProductos
          img="https://i.imgur.com/kdwGQgh.png"
          imgW={250}
          name='elnevado'
          sector='producto'
        />
        <CartProductos
          img="https://i.imgur.com/cQPhVf6.png"
          imgW={300}
          name='jorgerubio'
          sector='producto'
        />
         <CartProductos
          img="https://i.imgur.com/keR7hYv.png"
          imgW={200}
          name='uko'
          sector='producto'
        />
         <CartProductos
          img="https://i.imgur.com/UPIUxBk.png"
          imgW={200}
          name='secretopatagonico'
          sector='producto'
        />
      </div>
    </div>
  );
};

export default Bebidas;
