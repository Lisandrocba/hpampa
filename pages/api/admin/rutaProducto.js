import { categoriasServices, productosServices } from "@/services/services";

export default async function Login(req, res) {
  const { nombreEmpresa, nombreLinea, descripcion, subcategorias, img } =
    req.body;
  switch (req.method) {
    case "GET" : {
      const productos = await productosServices.getAll()
      return res.json({productos})
    }
    case "POST": {
      const nuevoProducto = await productosServices.save({
        nombreEmpresa,
        nombreLinea,
        descripcion,
        subcategorias,
        img,
      });
      return res.json({ error: "El producto se agrego exitosamente",  nuevoProducto});
    }


    default:
      res.json({ error: "error de servidor" });
  }
}
