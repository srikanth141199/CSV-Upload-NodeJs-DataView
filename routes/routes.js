import express from "express";
import multer from "multer";

import home from "../controllers/homeController.js";
import { deleteFile, view, uploadFile } from "../controllers/fileController.js";

const router = express.Router();
const upload = multer({ dest: 'uploads/files'})

router.get('/', home);
router.post('/upload', upload.single('file') , uploadFile);
router.get('/view/:id', view);
router.get('/delete/:id', deleteFile);

export default router;

