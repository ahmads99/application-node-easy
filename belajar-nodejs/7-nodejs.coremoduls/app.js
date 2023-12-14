// core moduls
// file system
const fs = require('fs');

// menuliskan string ke file (synchoronus)
/* 
try {
    fs.writeFileSync('data/test.txt', 'hello world secara synchronous!');
} catch (e) {
    console.log(e);
}
*/

// menuliskan string ke file (Asynchoronus)
//fs.writeFile('data/test.txt', 'Hello World secara Asynchronous!', (e) => {
//console.log(e);
//});

//membaca isi file (synchoronus)
//const data = fs.readFileSync('data/test.txt');
//console.log(data.toString());

// membaca string ke file (Asynchoronus)
//fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//    if (err) throw err;
//    console.log(data);
// });

// readline
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Masukan nama kalian :', (nama) => {
    rl.question('Masukan no HP kalian :', (NoHP) => {
    console.log('Terima kasih ${nama}', 'sudah menginput ${noHP}');
    })
    rl.close();
})