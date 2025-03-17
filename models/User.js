import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nombre: { type: String, require: true },
  password: { type: String, require: true },
  idprivada: { type: Number, require: true },
  casa: { type: Number, require: true },
  esPrimeraVez: { type: Boolean, default: true },
  esMoroso: { type: Boolean, require: true },
  role: {
    type: String,
    enum: ["superadmin", "admin", "residente", "seguridad"],
  },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

const User = mongoose.model("user", userSchema);

export default User;
