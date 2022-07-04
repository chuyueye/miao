const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200);
    // how to write html tags?
    // res.write();
    res.write(`<html lang="en">\r\n`)
    res.write(`<meta charset="utf-8">\r\n`)
    res.write('<h1>Hello World!</h1>\r\n');
    res.write(`<h2>${Date()}</h2>\r\n`);
    res.end(`</html>`);
}

const server = http.createServer(requestListener);
let port = 8080;
server.listen(port);
console.log(`A httpServer is listening at ${port}`)