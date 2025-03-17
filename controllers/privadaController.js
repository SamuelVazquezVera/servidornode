import Privada from "../models/Privada.js";

const getPrivadas = async (req, res) => {
  try {
    const privadas = await Privada.find({ esPrivada: true })
      .select("-esPrivada")
      .select("-_id")
      .select("-__v")
      .sort({ idprivada: 1 });
    res.status(200).json({
      success: true,
      privadas: privadas,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Error en el servidor",
    });
  }
};
const getPrivadaseguridad = async (req, res) => {
  try {
    const privadas = await Privada.find()
      .select("-esPrivada")
      .select("-_id")
      .select("-__v")
      .sort({ idprivada: 1 });
    let privadasSeguridad = privadas.filter((p) => p.nombre != "General");
    privadasSeguridad = privadasSeguridad.filter(
      (p) => p.nombre != "Seguridad"
    );
    res.status(200).json({
      success: true,
      privadas: privadasSeguridad,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Error en el servidor",
    });
  }
};

export { getPrivadas, getPrivadaseguridad };
