import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  getPrivadas,
  getPrivadaseguridad,
} from "../controllers/privadaController.js";

const router = express.Router();

router.get("/privadas", authMiddleware, getPrivadas);
router.get("/privadaseguridad", authMiddleware, getPrivadaseguridad);

export default router;
