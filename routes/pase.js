import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  addPaseMovimiento,
  extraerPase,
  deletePase,
  extraerPaseTodos,
} from "../controllers/paseController.js";

const router = express.Router();

router.post("/addpase", authMiddleware, addPaseMovimiento);
router.post("/extraer", authMiddleware, extraerPase);
router.post("/extraertodo", authMiddleware, extraerPaseTodos);
router.delete("/delete/:id", authMiddleware, deletePase);

export default router;
