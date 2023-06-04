import { categoriasServices } from "@/services/services"

export default async function Login (req,res){
    const {nombre, descripcion} = req.body
    switch (req.method) {
        case "GET": {
            const categorias = await categoriasServices.getAll()
            return res.json({categorias})
        }
        case "POST":{
            const categoriasDB = await categoriasServices.getById({nombre})
            console.log(categoriasDB)
            if(!categoriasDB === null) return res.json({error: "La categoria ya existe"})
            const nuevaCategoria = await categoriasServices.save({
                nombre,
                descripcion
            })
            return res.json({error: "La categoria se creo exitosamente"})
        }

        case "DELETE":{
            const id = JSON.parse(req.body)
            await categoriasServices.delete(id.id) 
        }

        default:
            res.json({error: "error de servidor"})
    }
}