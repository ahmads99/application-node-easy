import fs from "fs/promises";

const buffer = await fs.readFile(/*path:*/"file-system.mjs");

console.info(buffer.toString());

await fs.writeFile(/*file*/"temp.txt", /*data*/"Hello World!");

// manipulasi data file