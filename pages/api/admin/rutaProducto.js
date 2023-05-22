import { categoriasServices, productosServices } from "@/services/services";

export default async function Login(req, res) {
  
  switch (req.method) {
    case "GET" : {
      const productos = await productosServices.getAll()
      return res.json({productos})
    }
    case "POST": {
      const { nombreEmpresa, nombreLinea, descripcion, subcategorias, img } = req.body;
      const nuevoProducto = await productosServices.save({
        nombreEmpresa,
        nombreLinea,
        descripcion,
        subcategorias,
        img,
      });
      return res.json({ error: "El producto se agrego exitosamente",  nuevoProducto});
    }

    case "DELETE":{
        const id = JSON.parse(req.body)
        await productosServices.delete(id.id) 
    }
    default:
      res.json({ error: "error de servidor" });
  }
}
