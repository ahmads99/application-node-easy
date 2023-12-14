// console.log('Hello World!');
function cetakNama(nama) {
    return 'Halo, nama saya ${nama}';
}

const PI = 3.14;

const mahasiswa = {
    nama: 'Mas Doddy',
    umur: 30,
    cetakMhs() {
        return 'Halo, nama saya ${this.nama} dan saya  ${this.umur} tahun';
    },
};

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;

/* module.exports = {
    cetakNama: cetakNama,
    PI: PI,
    mahasiswa: mahasiswa,
};
*/

// ESlint 6
module.exports = { cetakNama, PI, mahasiswa};
