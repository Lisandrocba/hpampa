import { categoriasServices, subcategoriasServices } from "@/services/services"

export default async function Login (req,res){
    const {nombre, descripcion, categorias} = req.body

     switch (req.method) {
        case "POST":{
            const subcategoriasDB = await subcategoriasServices.getById({nombre})
            if(subcategoriasDB) return res.json({error: "La subcategoria ya existe"})
            const nuevaSubcategoria = await subcategoriasServices.save({
                nombre,
                descripcion
            })
            const categorie = await categoriasServices.getById({nombre : categorias})
            if(!categorie) return res.json({error: "La categoria no se encontro"})
            const _id = categorie._id
            categorie.subcategorias.push({subcategoria: nuevaSubcategoria._id})
            const result = await categoriasServices.update({_id, categorie})
            return res.json({error: "La categoria se creo exitosamente", result}) 
        }

        default:
            res.json({error: "error de servidor"})
    } 
}