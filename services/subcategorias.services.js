import Subcategorias from "@/models/Subcategorias";
import GenericServices from "./genericServices";

export default class SubcategoriasServices extends GenericServices{
    constructor(dao){
        super(dao, Subcategorias.model)
    }
}