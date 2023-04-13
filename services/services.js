import CategoriasServices from "./categorias.services";
import ProductosServices from "./productos.services";
import SubcategoriasServices from "./subcategorias.services";
import config from "@/config/config";
import Dao from "@/models/Dao";

const dao = new Dao(config.mongo)

export const categoriasServices = new CategoriasServices(dao)
export const productosServices = new ProductosServices(dao)
export const subcategoriasServices = new SubcategoriasServices(dao)