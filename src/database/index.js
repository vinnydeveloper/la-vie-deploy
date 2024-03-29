const Sequelize = require("sequelize");
require('dotenv').config()

const DB_NAME = "la-vie";
const DB_USER = "root";
const DB_PASS = "";
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
};

// objeto para guardar a conexão do banco dados
let db = {};

try {
  if (process.env.NODE_ENV === 'prod') {
    db = new Sequelize(process.env.DB_URL_CONNECTION);
  } else {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
  }
} catch (error) {
  console.log(error)
  console.error("Error ao tentar uma conexão com banco dados");
}

async function hasConection() {
  try {
    await db.authenticate();
    console.log("Banco dados conectado!");
  } catch (error) {
    console.log(error)
    console.error("Erro ao tentar se conectar ao banco de dados1");
  }
}

Object.assign(db, {
  hasConection,
});

module.exports = db;
