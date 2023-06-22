import multer from 'multer';

const upload = multer({ dest: "public" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default upload.single('image');