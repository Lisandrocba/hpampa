import CartProductos from "@/components/CartProductos";
import Footer from "@/components/Footer";
import NavBarSectores from "@/components/NavBarSectores";
import React from "react";

const Alimentos = () => {
  return (
    <div>
      <NavBarSectores />
      <div className="flex justify-center items-stretch flex-wrap gap-5 mb-10">
        <CartProductos
          img="https://i.imgur.com/5D5RKCa.png"
          productos={[
            "Risoni Clásico de Alubia y Arroz",
            "Risoni Zanahoria de Alubia y Arroz",
            "Pasta Multicereal con Chia Fusilli",
            "Pasta Multicereal con Kale Fusilli",
            "Pasta Multicereal con Maíz Fusilli",
            "Pasta Multicereal con Quinoa Fusilli",
            "Pasta de Legumbres Alubia y Quinoa",
            "Pasta de Legumbres Porotos, Alubia y Chía",
            "Pasta de Legumbres Arveja y Chía",
          ]}
          name="pastaceca"
          sector="alimentos"
          menuName = 'Pasta Ceca / Dry Pasta'
        />
        <CartProductos
          img="https://i.imgur.com/EIqJl7f.png"
          productos={[
            "Clásica", 
            "Selección Especial",
            "Limón",
            "Naranja",
            "Burrito",
            "Menta",
            "Manzanilla",
          ]}
          name="yerba"
          sector="alimentos"
          menuName = 'Yerba / Herb'
        />
        <CartProductos
          img="https://i.imgur.com/AxgOaeS.png"
          productos={[
            "Miel Líquida", 
            "Miel con Jugo de Naranja",
            "Dulce de Leche con Miel",
            "Miel de Cacao",
            "Mostaza con Miel",
            "Barbacoa con Miel",
            "Ketchup con Miel",
          ]}
          name="miel"
          sector="alimentos"
          menuName = 'Miel / Honey'
        />
        <CartProductos
          img="https://i.imgur.com/ZZJkApR.png"
          productos={[
            "La Prima", 
            "Sun Empire",
            "All Nature s",
            "BonLife",
            "FryDays",
            "Bonzaro",
          ]}
          name="aceite"
          sector="alimentos"
          menuName = 'Aceite / Oil'
        />
         <CartProductos
          img="https://i.imgur.com/FGDjbQ2.png"
          productos={[
            "Blend Extra Virgen", 
            "Extra Virgin",
            "Organic Extra Virgin"
          ]}
          name="aceiteoliva"
          sector="alimentos"
          menuName = 'Aceite de Oliva / Olive Oil'
        />
        <CartProductos
          img="https://i.imgur.com/DKG4cV8.png"
          productos={[
            "Leche en Polvo", 
            "Mozzarella",
            "Queso Azul"
          ]}
          name="lacteos"
          sector="alimentos"
          menuName = 'Lacteos / Dairy'
        />
        <CartProductos
          img="https://i.imgur.com/5yAI1Te.png"
          productos={["Paquete de azucar por 1kg", "Azucar a granel"]}
          name="azucar"
          sector="alimentos"
          menuName = 'Azúcar / Sugar'
        />
        <CartProductos
          img="https://i.imgur.com/GF9EJn5.png"
          productos={[
            "Arroz", 
            "Galletitas",
            "Galletitas bañadas con chocolate",
            "Snacks",
            "Antojitos",
            "Alfajor",
            "Tostaditas",
          ]}
          name="arroz"
          sector="alimentos"
          menuName = 'Arroz / Rice'
        />
          <CartProductos
          img="https://i.imgur.com/AgC6qir.png"
          productos={[
            "Tapas Rotiseras, masa Hojaldre 460 grs.", 
            "Tapas Rotisera, masa Hojaldre 600 grs.",
            "Tapas masa Criolla 330 grs.",
            "Tapas Rotiseras, masa Criolla 460 grs.",
            "Tapas Rotisera, masa Criolla 600 grs.",
            "Tapas masa Hojaldre 330 grs.",
            "Tapas de Copetín, masa de Hojaldre 250 grs.",
            "Tapas integrales - Sin Sal Agregada 330 grs.",
          ]}
          name="tapasempanadas"
          sector="alimentos"
          menuName = 'Tapa de Empanadas'
        />
          <CartProductos
          img="https://i.imgur.com/PdONJWc.png"
          productos={[
            "Talitas", 
            "Pepas",
            "Talitas de Arroz",
            "Bizcochitos",
            "Grisines",
            "Mini Marineras",
          ]}
          name="panificacion"
          sector="alimentos"
          menuName = 'Panificación / Baking'
        />
      </div>
      <Footer />
    </div>
  );
};

export default Alimentos;
