import mongoose from "mongoose";
const Schema = mongoose.Schema

export default class Subcategorias{
    constructor(data){
        this.data = data
    }

    static get model(){
        return "Subcategorias"
    }

    static get schema(){
        return{
            nombre: String,
            img: String,
            productos: [{
                producto:{
                    type: Schema.Types.ObjectId,
                    ref: "Productos"
                }
            }]
        }
    }
}