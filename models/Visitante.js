import mongoose from "mongoose";

const visitanteSchema = new mongoose.Schema({
  fechaVisita: { type: String, require: true },
  nombrePrivada: { type: String, require: true },
  nombreVisita: { type: String, require: true },
  casa: { type: Number, require: true },
  motivo: { type: String, require: true },
  ficha: { type: String, require: false },
  placa: { type: String, require: false },
  marca: { type: String, require: false },
  color: { type: String, require: false },
  hora: { type: String, require: false },
  esGeneral: { type: Boolean },
  foto: { type: String},
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

const Visitante = mongoose.model("visitante", visitanteSchema);

export default Visitante;
