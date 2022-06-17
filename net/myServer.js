


const http = require('http');
const server = http.createServer();
server.on((request, response) => {
    console.log(request);
    request.end();
})


