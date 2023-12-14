/*
Anda dapat menugaskan event handler ke event Anda sendiri dengan objek EventEmitter.
Pada contoh di bawah ini kami telah membuat sebuah fungsi yang akan dieksekusi ketika event "scream" diaktifkan.
Untuk memecat suatu peristiwa, gunakan emit()metode ini.
*/
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the eventhandler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');