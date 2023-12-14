import process from "process";

process.addListener("exit", function (exitCode){
    console.info('NodeJS exit with code %s', exitCode);
});

console.info(process.version);
console.table(process.argv);
console.table(process.report);
console.table(process.env)

process.exit(1);