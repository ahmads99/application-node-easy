import fs from "fs";
import {Console} from "console";

const file = fs.createWriteStream("application.log");

const log = new Console({
    stdout: file,
    stderr: file
});

log.info("Hello World!");
log.error("upss tol!");

const person = {
    firstName : "Mads",
    lastName : "999",
}

log.table(person);