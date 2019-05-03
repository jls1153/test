/*
* http://localhost:8080/
*/

var http = require('http');
console.log('set browser - http://localhost:8080');
console.log('Listening on port 8080...');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);
