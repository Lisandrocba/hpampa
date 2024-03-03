import CartProductos from "@/components/CartProductos";
import Footer from "@/components/Footer";
import NavBarSectores from "@/components/NavBarSectores";
import React from "react";

const Legumbres = () => {
  return (
    <div>
      <NavBarSectores />
      <div className="flex justify-center items-stretch flex-wrap gap-5 mb-10">
        <CartProductos
          img="https://i.imgur.com/5yAI1Te.png"
          productos={[
            "Porotos Alubia",
            "Lentejas",
            "Garbanzos",
            "Porotos Colorados",
            "Porotos Negros",
            "Porotos Mung",
            "Arvejas Secas Partidas",
            "Porotos Adzuki",
            "Porotos Cramberry",
          ]}
          name='legumbres'
          sector='legumbres'
        />
      </div>
      <Footer />
    </div>
  );
};

export default Legumbres;
