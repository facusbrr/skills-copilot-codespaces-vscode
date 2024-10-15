// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response) {
    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;

    fs.readFile('comment.html', 'utf-8', function(error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
});

server.listen(52273, function() {
    console.log('Server running at http://127.0.0.1:52273');
});