/*
Langkah 3: Simpan File
Ketika file berhasil diunggah ke server, itu ditempatkan di folder sementara.
Path ke direktori ini dapat ditemukan di objek "files", diteruskan sebagai argumen ketiga dalam parse()fungsi panggilan balik metode.
Untuk memindahkan file ke folder pilihan Anda, gunakan modul Sistem File, dan ganti nama file:
*/
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var newpath = 'C:/Users/hp/Deskop' + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);