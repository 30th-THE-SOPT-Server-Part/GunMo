import { Router } from "express";
import FileController from "../controllers/FileController";
import upload from "../config/multer";

const router: Router = Router();

router.post('/upload', upload.single('file'), FileController.uploadFileToS3);
router.post('/uploads', upload.array('file'), FileController.uploadFilesToS3);

export default router; 