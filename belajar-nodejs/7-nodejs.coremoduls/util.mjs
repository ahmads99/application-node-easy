import util from "util";

console.info(util.format("Nama : %s", "Mads999"));

const person = {firstname: "Mads999", lastname: "Timoer Freedom"};
console.info(util.format("person : %j", person));
