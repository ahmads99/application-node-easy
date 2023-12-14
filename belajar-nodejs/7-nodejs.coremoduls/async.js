function samplePromise(){
    return Promise.resolve("Mads");
}


async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();

