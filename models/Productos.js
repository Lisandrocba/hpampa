export default class Productos{
    constructor(data){
        this.data = data
    }

    static get model(){
        return "Productos"
    }

    static get schema(){
        return{
            nombre: String,
            descripcion: String,
            img: String
        }
    }
}