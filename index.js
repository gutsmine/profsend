var http = require("http");
var fs = require('fs');


var top = fs.readFileSync('./data/ top. html', 'utf-8');
var about = fs.readFileSync('./data/ about. html', 'utf-8');
var update = fs.readFileSync('./date/ 13update. html', 'utf-8');

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
var target = '';	
switch (req.url){
   case '/':
   case '/top.html':			 
   case '/top': 
    target = top;
    break;
   case '/about':
   case '/about.html': 
    target = about;
   　break;
   case '/13update':
   case '/13update.html': 
    target = update;
   　break;			 
   default:
   　res.writeHead(404,{'Content-Type':'text/plain'});
   　res.end('bad request');
   return;
 }
	

 fs.readFile(target,'utf-8',function(err,data){
   res.writeHead(200, {"Content-Type": getType(url)});
   res.write(data);
   res.end();
 });
server.listen(1234);
