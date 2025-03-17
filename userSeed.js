import connectToDatabase from "./db/db.js";
import User from "./models/User.js";
import bcrypt from "bcrypt";

const userRegister = async () => {
  try {
    connectToDatabase();
    const hashPassword = await bcrypt.hash("adminTurquesas", 10);
    const user = new User({
      nombre: "administradorgeneral",
      password: hashPassword,
      idprivada: 16,
      casa: 0,
      esPrimeraVez: false,
      esMoroso: false,
      role: "superadmin",
    });
    user.save();
  } catch (error) {
    console.log(error);
  }
};

userRegister();
