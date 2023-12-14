import {URL} from "url";

const pzn = new URL("http://www.programmerzamannow.com/belajar?kelas=nodejs");

pzn.host = "www.mads999.com";
const searchParams = pzn.searchParams;
searchParams.append("status", "premium");

console.info(pzn.toString());