const { Psicologos } = require("../models");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");
const bcrypt = require("bcryptjs");

const AuthController = {
  async login(req, res) {
    const { email, senha } = req.body;

    const psicologo = await Psicologos.findOne({
      where: {
        email,
      },
    });

    if (!psicologo) {
      return res.status(400).json("Email não cadastrado!");
    }

    if (!bcrypt.compareSync(senha, psicologo.senha)) {
      return res.status(401).json("Senha invalida!");
    }

    const payload = {
      id: psicologo.id,
      email: psicologo.email,
      nome: psicologo.nome,
      userType: "user",
    };

    const token = jwt.sign(payload, secret.key);

    return res.json({ ...payload, token });
  },
};

module.exports = AuthController;
