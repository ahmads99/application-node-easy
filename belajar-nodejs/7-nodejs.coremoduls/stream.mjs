import fs from "fs";

const writer = fs.createWriteStream("target.log");
writer.write("Mads\n");
writer.write("999\n");
writer.write("Mads\n");
writer.close();

const reader = fs.createReadStream("target.log");
reader.on("data", function (data) {
    console.info(data.toString());
    reader.close();
});