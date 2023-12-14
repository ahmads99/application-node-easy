
// javascript modules

function samplePromise(){
    return Promise.resolve("Mads");
}


const name = await samplePromise();
console.info(name);