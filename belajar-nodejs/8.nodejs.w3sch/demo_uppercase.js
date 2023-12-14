/*
Setelah paket diinstal, paket (NPM) siap digunakan.
Sertakan paket "huruf besar" dengan cara yang sama seperti Anda memasukkan modul lainnya:
*/
var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  /*Use our upper-case module to upper case a string:*/
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(8080);