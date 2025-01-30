
var http = require('http');
var currentdate = require('./mymodule');

http.createServer(function (req, res) {
    res.whiteHead(200, {'Content-Type': 'text/html'});

 res.writeHead(200, {'Content-Type': 'text/html'});
 res.end('Hello World!');

 
}).listen(8080);