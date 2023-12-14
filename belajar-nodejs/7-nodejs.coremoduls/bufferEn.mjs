const buffer = Buffer.from("Mads999", "utf8");

console.info(buffer.toString("base64"));
console.info(buffer.toString("hex"));

const buffer2 = Buffer.from("RWtvIEt1cm5pYXdhbiBLaGFubmVKeQ==", "base64url");

console.info(buffer2.toString("utf8"));