import mongoose from "mongoose";

const paseSchema = new mongoose.Schema({
  fechaUso: { type: String, require: true },
  nombrePrivada: { type: String, require: true },
  datoSolicitante: { type: String, require: true },
  casa: { type: Number, require: true },
  tipoMovimiento: { type: String, require: true },
  userSolicitante: { type: String, require: true },
  esMoroso: { type: Boolean, require: true },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

const Pase = mongoose.model("pase", paseSchema);

export default Pase;
