require('dotenv').config()

module.exports = {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
  "dialect": process.env.DB_TYPE,
  "port": process.env.DB_PORT,
  dialectOptions: {
    ssl: {
      "require": true
    }
  }

}

// module.exports = process.env.DB_URL_CONNECTION