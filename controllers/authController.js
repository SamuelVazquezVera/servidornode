import User from "../models/User.js";
import Privada from "../models/Privada.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  try {
    const { nombre, password } = req.body;

    const user = await User.findOne({ nombre });
    if (!user) {
      res.status(404).json({ success: false, error: "Datos Incorrectos" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(404).json({ success: false, error: "Datos Incorrectos" });
    }
    if (user.esMoroso) {
      res
        .status(404)
        .json({ success: false, error: "El usuario esta marcado como moroso" });
    }
    var idprivada = user.idprivada;
    const privada = await Privada.findOne({ idprivada });
    const token = jwt.sign(
      { id: user._id, role: user.role, idprivada: privada.idprivada },
      process.env.JWT_KEY,
      { expiresIn: "1D" }
    );
    res.status(200).json({
      success: true,
      token: token,
      user: {
        id: user._id,
        nombre: user.nombre,
        role: user.role,
        primeraVez: user.esPrimeraVez,
        privada: privada.nombre,
        idprivada: privada.idprivada,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
const verify = (req, res) => {
  return res.status(200).json({
    success: true,
    user: req.user,
  });
};
export { login, verify };
