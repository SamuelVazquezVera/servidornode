import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  getUsuarios,
  addUsuariosPrivada,
  deleteUsuariosPrivada,
  getUsuario,
  modifyUsuario,
  getUsuariosPrivada,
  getUsuarioPrivada,
  modyUsuario,
  changeUsuario,
} from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/usuariosprivadas", authMiddleware, getUsuarios);
router.get("/usuariosprivadas/:id", authMiddleware, getUsuario);
router.post("/addusuarioprivada", authMiddleware, addUsuariosPrivada);
router.post("/usuariosprivadasr", authMiddleware, modifyUsuario);
router.delete("/usuariosprivadas/:id", authMiddleware, deleteUsuariosPrivada);
router.post("/usuariosprivada", authMiddleware, getUsuariosPrivada);
router.post("/usuarioprivada/change", authMiddleware, modyUsuario);
router.post("/usuarioprivada", authMiddleware, getUsuarioPrivada);
router.post("/changeusuario", authMiddleware, changeUsuario);
export default router;
