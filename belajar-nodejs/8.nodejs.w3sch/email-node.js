/*
Modul Nodemailer memudahkan pengiriman email dari komputer Anda.
Modul Nodemailer dapat diunduh dan diinstal menggunakan npm:
Setelah Anda mengunduh modul Nodemailer, Anda dapat memasukkan modul tersebut ke dalam aplikasi apa pun:
var nodemailer = require('nodemailer');

Kirim Sebuah email
Sekarang Anda siap mengirim email dari server Anda.

Gunakan nama pengguna dan kata sandi dari penyedia email pilihan Anda untuk mengirim email. Tutorial ini akan menunjukkan cara menggunakan akun Gmail Anda untuk mengirim email:
*/
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mads999@gmail.com',
    pass: 'mads999'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  //Untuk mengirim email ke lebih dari satu penerima, tambahkan mereka ke properti "to" dari objek mailOptions, dipisahkan dengan koma:
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

// Dan itu saja! Sekarang server Anda dapat mengirim email.