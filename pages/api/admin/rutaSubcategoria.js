import { categoriasServices } from "@/services/services"

export default async function Login (req,res){
    const result = req.body

     switch (req.method) {
        case "POST":{
            console.log(result)
            /* const categoriasDB = categoriasServices.getById({nombre})
            if(!categoriasDB) return res.json({error: "La categoria ya existe"})
            const nuevaCategoria = await categoriasServices.save({
                nombre,
                descripcion
            })
            return res.json({error: "La categoria se creo exitosamente"}) */
        }

        default:
            res.json({error: "error de servidor"})
    } 
}