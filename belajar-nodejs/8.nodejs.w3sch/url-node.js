/*
Modul URL membagi alamat web menjadi bagian-bagian yang dapat dibaca.
Untuk memasukkan modul URL, gunakan require() metode:

Parsing alamat dengan url.parse() metode, dan itu akan mengembalikan objek URL dengan setiap bagian dari alamat sebagai properti:
*/
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address:
var q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;
console.log(qdata.month);
