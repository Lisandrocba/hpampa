import Productos from "@/models/Productos";
import GenericServices from "./genericServices";

export default class ProductosServices extends GenericServices{
    constructor(dao){
        super(dao, Productos.model)
    }
}