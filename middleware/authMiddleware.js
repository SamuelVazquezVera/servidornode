import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Privada from "../models/Privada.js";
const verifyUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res
        .status(404)
        .json({ success: false, error: "Token Incorrecto" });
    }
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    if (!decoded) {
      return res
        .status(404)
        .json({ success: false, error: "Token Incorrecto" });
    }

    const user = await User.findById({ _id: decoded.id }).select("-password");
    const privada = await Privada.findOne({ idprivada: user.idprivada });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: "Token Incorrecto" });
    }
    var usTemp = {
      id: user._id,
      nombre: user.nombre,
      role: user.role,
      privada: privada.nombre,
      idprivada: privada.idprivada,
    };
    req.user = usTemp;
    next();
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export default verifyUser;
