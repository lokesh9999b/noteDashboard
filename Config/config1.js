const sql = require('mssql');

var config = {
    user: "sa",
    password: "Lokesh@999",
    server: "MAA019179A\\SQLEXPRESS",
    database: "Note_Main",
    options: {
      encrypt: true,
      trustServerCertificate: true
    }
  };
  
  sql.connect(config, err => {
    if (err) {
      throw err;
    }
    console.log("Db connected");
  });

  module.exports = sql;