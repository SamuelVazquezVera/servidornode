import Visitante from "../models/Visitante.js";

const addVisitante = async (req, res) => {
  try {
    const {
      fecha,
      privada,
      nombreVisita,
      casa,
      motivo,
      placa,
      marca,
      color,
      hora,
      ficha,
      esGeneral,
      foto
    } = req.body;
    const visitante = new Visitante({
      fechaVisita: fecha,
      nombrePrivada: privada,
      nombreVisita: nombreVisita,
      casa: casa,
      motivo: motivo,
      placa: placa,
      marca: marca,
      color: color,
      hora: hora,
      ficha: ficha,
      esGeneral: esGeneral,
      foto: foto
    });
    visitante.save();
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

const getVisitantes = async (req, res) => {
  try {
    const { fecha } = req.body;

    const visitantes = await Visitante.find({ fechaVisita: fecha });

    return res.status(200).json({
      success: true,
      visitantes: visitantes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getVisitante = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Visitante.findById({ _id: id });

    res.status(200).json({
      success: true,
      visitante: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const modifyVisitante = async (req, res) => {
  try {
    const {
      id,
      privada,
      nombreVisita,
      casa,
      motivo,
      placa,
      marca,
      color,
      hora,
      ficha,
      esGeneral, 
      foto
    } = req.body;

    const visitante = await Visitante.findOne({ _id: id });
    if (visitante) {
      await Visitante.findByIdAndUpdate(
        { _id: id },
        {
          nombrePrivada: privada,
          nombreVisita: nombreVisita,
          casa: casa,
          motivo: motivo,
          placa: placa,
          marca: marca,
          color: color,
          hora: hora,
          ficha: ficha,
          esGeneral: esGeneral,
          foto:foto
        }
      );
    }

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

export { addVisitante, getVisitantes, getVisitante, modifyVisitante };
