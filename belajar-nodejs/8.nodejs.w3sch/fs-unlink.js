/*
Untuk menghapus file dengan modul Sistem File, gunakan fs.unlink() metode ini.

Metode ini fs.unlink()menghapus file yang ditentukan:
*/
var fs = require('fs');

//Delete the file mynewfile2.txt:
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});