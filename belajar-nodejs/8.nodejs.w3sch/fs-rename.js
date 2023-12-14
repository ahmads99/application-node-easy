/*
Untuk mengganti nama file dengan modul Sistem File, gunakan fs.rename() metode ini.
Metode fs.rename()mengganti nama file yang ditentukan:
*/
var fs = require('fs');

//Rename the file "mynewfile1.txt" into "myrenamedfile.txt":
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});