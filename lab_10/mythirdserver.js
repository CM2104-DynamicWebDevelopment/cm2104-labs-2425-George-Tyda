
var http = require('http');
var knockknock = require('knock-knock-jokes');

http.createServer(function (req, res) {
    res.whiteHead(200, {'Content-Type': 'text/html'});
    var randomJoke = knocknock()
    res.end('randomJoke');

 
}).listen(8080);