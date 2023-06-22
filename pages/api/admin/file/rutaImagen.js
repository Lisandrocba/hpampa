import formidable from "formidable";
import fs from "fs";
import path from "path";
import NextCors from "nextjs-cors";
const sharp = require("sharp");

export const config = {
  api: {
    bodyParser: false, // Desactiva el análisis automático del cuerpo de la solicitud
  },
};

async function convertImageToBuffer(imagePath, outputPath) {
    try {
        const imageBuffer = await sharp(imagePath).toBuffer();
        fs.writeFileSync(outputPath, imageBuffer);
        console.log('Imagen guardada exitosamente.');
      } catch (error) {
        console.error('Error al guardar la imagen:', error);
      }
}

export default async function Producto(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  switch (req.method) {
    case "GET": {
      console.log("llego a ruta imagen");
      res.json({ message: "Ruta imagen" });
    }
    case "POST": {
      const form = new formidable.IncomingForm();

      form.parse(req, async (error, fields, files) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: "Error al cargar la imagen." });
        } else {
          // Extrae la información de la imagen del objeto files
          const file = files.image;
          const nameFile = file.originalFilename;
          const filePath = path.join(process.cwd(),'public/img/',nameFile)
          const imagePath = file.filepath
          try {
            convertImageToBuffer(imagePath, filePath)

            // Realiza cualquier otra operación con la imagen (opcional)

            res.status(200).json({ message: "Imagen guardada exitosamente." });
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error al guardar la imagen." });
          }
        }
      });
    }
  }
}
