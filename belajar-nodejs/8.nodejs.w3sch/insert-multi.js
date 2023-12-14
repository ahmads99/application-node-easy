const db = require("./db_config");

const sql = "INSERT INTO mahasiwaz (name, address) VALUES ?";
const values = [
  ["Rifzkun999", "Trilogi University"],
  ["Romadhonz999", "Gunadarma University"],
  ["Wardhana999", "Pancasila University"],
  ["Wildownz999", "Telkom University"],
  ["Gielangz999", "Valley University"],
  ["Mailz999", "Gielbert University"],
  ["Christionz999", "Indonesia University"],
  ["Royandtzy999", "Havard University"],
  ["Arielnoahz999", "Tanri Abeng University"],
  ["Latief999", "UKRIDA University"],
  ["Kibenz999", "Esa Unggul University"],
  ["Nickoz999", "Trisakti University"],
  ["Boiiz999", "Mataram University"],
  ["Agielz999", "Sidewayz University"],
];

db.query(sql, [values], function (err, result) {
  if (err) throw err;
  console.log("Number of records inserted: " + result.affectedRows);
});