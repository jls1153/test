/*
* http://localhost:8080/?year=2017&month=July
*/

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello Brave New World!');
  res.end();
}).listen(8080);
