import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("zlibCompres.mjs");
const result = zlib.gzipSync(source);

fs.writeFileSync("zlibCompres.mjs.txt", result);