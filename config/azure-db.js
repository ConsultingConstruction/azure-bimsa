require('dotenv').config();
//
const sqlConfig = {
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  server: process.env.server,
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

exports.sqlConfig = sqlConfig;
