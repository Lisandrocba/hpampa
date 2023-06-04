import mongoose from "mongoose";
const Schema = mongoose.Schema;

export default class Categorias{
    constructor(data){
        this.data = data
    }

    static get model(){
        return "Categorias"
    }

    static get schema(){
        return {
            nombre: String,
            descripcion: String,
            subcategorias: [{
                subcategoria: {
                    type: Schema.Types.String,
                    ref: "Subcategorias"
                }
            }]
        }
    }
}