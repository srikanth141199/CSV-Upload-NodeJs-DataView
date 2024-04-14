import express from "express";
import multer from "multer";

import home from "../controllers/homeController.js";

const router = express.Router();

router.get('/', home);

export default router;

