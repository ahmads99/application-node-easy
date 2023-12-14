import { EventEmitter } from "events";

const emitter = new EventEmitter();
emitter.addListener(/*eventName;*/"Hello", /*listener;*/(name) => {
    console.info(/*data;*/"Hello " + name);
});
emitter.addListener(/*eventName;*/"Hello", /*listener;*/(name) => {
    console.info(/*data;*/"Halow " + name);
});
emitter.addListener(/*eventName;*/"Hello", /*listener;*/(name) => {
    console.info(/*data;*/"Hamz " + name);
});

emitter.emit(/*eventName;*/"Hello", /*args;*/ "Mads");