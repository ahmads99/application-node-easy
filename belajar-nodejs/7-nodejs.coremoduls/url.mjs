import {URL} from "url";

const pzn = new URL("http://www.programmerzamannow.com/belajar?kelas=nodejs");

pzn.host = "www.mads999.com";
pzn.searchParams.append("status", "premium");


console.info(pzn.toString());
console.info(pzn.href);
console.info(pzn.protocol);
console.info(pzn.host);
console.info(pzn.pathname);
console.info(pzn.searchParams);