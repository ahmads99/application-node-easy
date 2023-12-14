/*
Buat Koneksi
Mulailah dengan membuat koneksi ke database.

Gunakan username dan password dari database MySQL Anda.
*/
const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mahasiwaz"
});

db.connect(function(error){
    if(error){
        console.error(error);
    } else {
        console.info("Connected to Database");
    }
});

module.exports = db;