/*
* http://localhost:8080/?year=2017&month=July
*/

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = "Current Year: " + q.year + " " + "Current Month: " + q.month;
  res.end(txt);
}).listen(8080);
