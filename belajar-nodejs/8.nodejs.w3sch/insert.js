const db = require("./db_config");

const sql = `INSERT INTO mahasiwaz (name, address) 
            VALUES ('Ahmads999', 'Trilogi University')`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");
});