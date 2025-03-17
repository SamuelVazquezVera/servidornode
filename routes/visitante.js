import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  addVisitante,
  getVisitantes,
  getVisitante,
  modifyVisitante,
} from "../controllers/visitanteController.js";

const router = express.Router();

router.post("/addvisitante", authMiddleware, addVisitante);
router.post("/getvisitantes", authMiddleware, getVisitantes);
router.get("/getvisitante/:id", authMiddleware, getVisitante);
router.post("/modifyvisitante", authMiddleware, modifyVisitante);

export default router;
