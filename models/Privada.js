import mongoose from "mongoose";

const privadaSchema = new mongoose.Schema({
  idprivada: { type: Number, require: true },
  nombre: { type: String, require: true },
  esPrivada: { type: Boolean, default: true },
});

const Privada = mongoose.model("privada", privadaSchema);

export default Privada;
