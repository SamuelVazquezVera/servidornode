import Pase from "../models/PaseMovimiento.js";

const addPaseMovimiento = async (req, res) => {
  try {
    const { fecha, privada, solicitante, casa, movimiento, elabora, esMoroso } =
      req.body;
    const pase = new Pase({
      casa: casa,
      datoSolicitante: solicitante,
      fechaUso: fecha,
      nombrePrivada: privada,
      tipoMovimiento: movimiento,
      userSolicitante: elabora,
      esMoroso: esMoroso,
    });
    pase.save();
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const deletePase = async (req, res) => {
  try {
    const { id } = req.params;
    await Pase.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const extraerPase = async (req, res) => {
  try {
    const { fecha, privada } = req.body;

    const pases = await Pase.find({ nombrePrivada: privada });

    const pasesReturn = pases.filter((p) => p.fechaUso === fecha);

    return res.status(200).json({
      success: true,
      pases: pasesReturn,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const extraerPaseTodos = async (req, res) => {
  try {
    const { fecha } = req.body;

    const pases = await Pase.find({ fechaUso: fecha });

    return res.status(200).json({
      success: true,
      pases: pases,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export { addPaseMovimiento, extraerPase, deletePase, extraerPaseTodos };
