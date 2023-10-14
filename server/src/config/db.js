const mysql2 = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()

const pool = mysql2.createPool({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
})

module.exports = pool.promise()
