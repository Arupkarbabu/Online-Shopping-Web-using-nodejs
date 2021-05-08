const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "arup_schema",
  password: "arup@1998",
});

module.exports = pool.promise();
