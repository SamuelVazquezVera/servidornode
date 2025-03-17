import Privada from "../models/Privada.js";
import Usuario from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const getUsuarios = async (req, res) => {
  try {
    const result = await Usuario.aggregate([
      {
        $lookup: {
          from: "privadas",
          localField: "idprivada",
          foreignField: "idprivada",
          as: "usuarioPrivada",
        },
      },
      {
        $unwind: "$usuarioPrivada",
      },
      {
        $match: { $or: [{ role: "seguridad" }, { role: "admin" }] },
      },
      {
        $match: { "usuarioPrivada.esPrivada": true },
      },
      {
        $project: {
          _id: 1,
          nombre: 1,
          casa: 1,
          esMoroso: 1,
          role: 1,
          "usuarioPrivada.nombre": 1,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      usuarios: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
const getUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Usuario.findById({ _id: id });

    res.status(200).json({
      success: true,
      usuario: {
        nombre: result.nombre,
        idprivada: result.idprivada,
        casa: result.casa,
        role: result.role,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
const changeUsuario = async (req, res) => {
  const { id, role, moroso } = req.body;
  try {
    await Usuario.findByIdAndUpdate(
      { _id: id },
      { role: role, esMoroso: moroso }
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
const modyUsuario = async (req, res) => {
  const { id, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    await Usuario.findByIdAndUpdate(
      { _id: id },
      { password: hashPassword, esPrimeraVez: false }
    );
    const user = await Usuario.findOne({ _id: id });
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
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
const modifyUsuario = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await Usuario.findOne({ _id: id });
    if (user) {
      const password = user.nombre;
      const hashPassword = await bcrypt.hash(password, 10);
      const us = await Usuario.findByIdAndUpdate(
        { _id: id },
        { password: hashPassword, esPrimeraVez: true }
      );

      return res.status(200).json({ success: true });
    } else {
      return res
        .status(400)
        .json({ success: false, error: "No existe el usuario" });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
const addUsuariosPrivada = async (req, res) => {
  try {
    const { idPrivada, casa, role, nombreusuario, esMoroso } = req.body;
    const us = await Usuario.findOne({ nombre: nombreusuario });
    if (us) {
      return res
        .status(400)
        .json({ success: false, error: "Ya exista el usuario" });
    }
    const priv = await Privada.findOne({ idprivada: idPrivada });
    if (priv) {
      const password = nombreusuario;
      const hashPassword = await bcrypt.hash(password, 10);
      const user = new Usuario({
        nombre: nombreusuario,
        password: hashPassword,
        idprivada: idPrivada,
        casa: casa,
        role: role,
        esMoroso: esMoroso,
      });
      user.save();
      return res.status(200).json({
        success: true,
      });
    } else {
      return res
        .status(500)
        .json({ success: false, error: "Datos Incorrectos" });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteUsuariosPrivada = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await Usuario.findByIdAndDelete({ _id: id });
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

const getUsuarioPrivada = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await Usuario.findOne({ _id: id });
    if (user) {
      const privada = await Privada.findOne({ idprivada: user.idprivada });
      if (privada) {
        res.status(200).json({
          success: true,
          user: {
            id: user._id,
            nombre: user.nombre,
            role: user.role,
            esMoroso: user.esMoroso,
            casa: user.casa,
            idprivada: privada.idprivada,
            privada: privada.nombre,
          },
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getUsuariosPrivada = async (req, res) => {
  const { id } = req.body;
  try {
    const result = await Usuario.aggregate([
      {
        $lookup: {
          from: "privadas",
          localField: "idprivada",
          foreignField: "idprivada",
          as: "usuarioPrivada",
        },
      },
      {
        $unwind: "$usuarioPrivada",
      },
      {
        $match: { $or: [{ role: "residente" }, { role: "admin" }] },
      },
      {
        $match: { "usuarioPrivada.esPrivada": true },
      },
      {
        $project: {
          _id: 1,
          nombre: 1,
          casa: 1,
          esMoroso: 1,
          role: 1,
          idprivada: 1,
          "usuarioPrivada.nombre": 1,
        },
      },
    ]);
    const user = await Usuario.findOne({ _id: id });
    const privada = await Privada.findOne({ idprivada: user.idprivada });

    let usuarios = result.filter((r) => r.idprivada === privada.idprivada);

    res.status(200).json({
      success: true,
      usuarios: usuarios,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export {
  getUsuarios,
  addUsuariosPrivada,
  deleteUsuariosPrivada,
  getUsuario,
  modifyUsuario,
  getUsuariosPrivada,
  modyUsuario,
  getUsuarioPrivada,
  changeUsuario,
};
