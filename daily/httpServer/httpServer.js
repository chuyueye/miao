const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200);
    // how to write html tags?
    // res.write();
    res.write('Hello World!');
    res.end();
}

const server = http.createServer(requestListener);
let port = 8080;
server.listen(port);
console.log(`A httpServer is listening at ${port}`)