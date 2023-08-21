require('dotenv').config()

module.exports = {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "host": process.env.DB_PASS,
  "dialect": process.env.DB_TYPE,
  "port": process.env.DB_PORT
}