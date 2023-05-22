import { categoriasServices } from "@/services/services"

export default async function Login (req,res){
    const {nombre, descripcion} = req.body
    switch (req.method) {
        case "GET": {
            const categorias = await categoriasServices.getAll()
            return res.json({categorias})
        }
        case "POST":{
            const categoriasDB = categoriasServices.getById({nombre})
            if(!categoriasDB) return res.json({error: "La categoria ya existe"})
            const nuevaCategoria = await categoriasServices.save({
                nombre,
                descripcion
            })
            return res.json({error: "La categoria se creo exitosamente"})
        }

        default:
            res.json({error: "error de servidor"})
    }
}