import Categorias from "@/models/Categorias";
import GenericServices from "./genericServices";

export default class CategoriasServices extends GenericServices{
    constructor(dao){
        super(dao, Categorias.model)
    }
}