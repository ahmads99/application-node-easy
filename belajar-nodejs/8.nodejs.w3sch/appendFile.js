var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    // fs.open() & fs.writeFile()
  if (err) throw err;
  console.log('Saved!');
});

/*
Perbarui File
Modul Sistem File memiliki metode untuk memperbarui file:

fs.appendFile()
fs.writeFile()
Metode fs.appendFile()menambahkan konten yang ditentukan di akhir file yang ditentukan:
*/