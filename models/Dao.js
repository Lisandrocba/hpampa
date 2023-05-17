import mongoose from "mongoose";
import Categorias from "./Categorias";
import Subcategorias from "./Subcategorias";
import Productos from "./Productos";

export default class Dao{
    constructor(config){
        this.mongoose = mongoose
        .connect(config.url, { useNewUrlParser: true, useUnifiedTopology: true })
        .catch((e)=>{
            console.log(e)
            process.exit()
        })
        
        const timestamp = {
            timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
        };
        
        const categoriaSchema = mongoose.Schema(Categorias.schema, timestamp)
        const subcategoriaSchema = mongoose.Schema(Subcategorias.schema, timestamp)
        const productoSchema = mongoose.Schema(Productos.schema, timestamp)
        
        this.models = {
            [Categorias.model] : mongoose.models.Categorias || mongoose.model(Categorias.model, categoriaSchema),
            [Subcategorias.model] : mongoose.models.Subcategorias || mongoose.model(Subcategorias.model, subcategoriaSchema),
            [Productos.model] : mongoose.models.Productos || mongoose.model(Productos.model, productoSchema)
        }
    }

    findOne = async (options, entity) => {
        if (!this.models[entity]) throw new Error(`Modelo ${entity} no encontrado`);
        let result = await this.models[entity].findOne(options);
        return result ? result.toObject() : null;
      };
    
    getAll = async (options, entity)=>{
        if (!this.models[entity]) throw new Error(`Modelo ${entity} no encontrado`);
        let result = await this.models[entity].find(options);
        return result.map(result=>result.toObject())
      }
    
    insert = async(document, entity)=>{
        if (!this.models[entity]) throw new Error(`Modelo ${entity} no encontrado`);
        try{
            let instance = new this.models[entity](document);
            let result = await instance.save();
            return result ? result.toObject() : null;
        }catch(e){
            console.log(error);
            return null;
        }
      }
    
    update = async(document, entity)=>{
        if (!this.models[entity]) throw new Error(`Modelo ${entity} no encontrado`);
        const id = document._id;
        delete document._id;
        let result = await this.models[entity].findByIdAndUpdate(id, {$set: document.categorie})
        return result.toObject();
      }
    
    delete = async(id,entity)=>{
        if(!this.models[entity]) throw new Error(`Entity ${entity} not found or defined`)
        let result = await this.models[entity].findByIdAndDelete(id);
        return result? result.toObject():null;
        }
    
    exists = async(entity,options)=>{
            if(!this.models[entity]) throw new Error(`Entity ${entity} not found or defined`)
            return this.models[entity].exists(options);
        }
}