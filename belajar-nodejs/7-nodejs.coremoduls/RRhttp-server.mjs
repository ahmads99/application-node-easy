import http from "http";

const server = http.createServer( (request, response) => {
    if (request.method = "POST") {
        request.addListener("data", (data) => {
            response.setHeader("Content-Type", "application/json");
            response.write(data);
            response.end();
        })
    } else {
        if(request.url === "/mads"){
            response.write("Hello Mads99");
        }else{
            response.write("Hello HTTP Server");
        }
        response.end();
    }
});

server.listen(3000);