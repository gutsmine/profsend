var http = require("http");
var fs = require('fs');

function getType(_url) {
	var types = {
		".html": "text/html",
		".css": "text/css",
		".js": "text/javascript",
		".png": "image/png",
		".gif": "image/gif",
		".svg": "svg+xml"
	}
	for (var key in types) {
		if (_url.endsWith(key)) {
			return types[key];
		}
	}
	return "text/plain";
}

var server = http.createServer(function (req, res) {
switch (req.url){
   case '/':
   case '/top.html':			 
   case '/top': target = './data/top.html';
    break;
   case '/about':
   case '/about.html': target = './data/about.html';
   　break;
   case '/13update':
   case '/13update.html': target = './data/13update.html';
   　break;			 
   default:
   　res.writeHead(404,{'Content-Type':'text/plain'});
   　res.end('bad request');
   return;
 }
	
	var url = "data" + (req.url.endsWith("/") ? req.url + "top.html" : req.url);
	if (fs.existsSync(url)) {
		fs.readFile(url, (err, data) => {
			if (!err) {
                         res.writeHead(200, {"Content-Type": getType(url)});
                         res.write(data);
                         res.end();
			} else {
				res.statusCode = 500;
				res.end();
			}
		});
	} else {
		res.statusCode = 404;
		res.end();
	}
});

var port = process.env.PORT || 3000;
server.listen(port);
