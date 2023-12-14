import dns from "dns/promises";

// const ip = await dns.lookup("www.programmerzamannow.com");
const address = await dns.lookup("www.disnakerja.com");

console.info(address.address);
console.info(address.family);


/*
import dns from "dns/promises";

function callback(error, ip) {
    console.info(ip);
}

dns.lookup("www.programmerzamannow.com", callback)
*/