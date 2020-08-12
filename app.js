var express = require("express");
var helmet = require('helmet');
var cookieParser = require("cookie-parser");
var session = require('express-session')

var app = express();
app.use(cookieParser());
app.use(session({
	secret: 'Profsend is secure',
	cookie: {
	 secure: true,
	 domain: "profsend.ga",
	 sameSite: "lax" 
 }
}));
app.use(helmet.frameguard({ action: 'SAMEORIGIN' }));
app.set("port", process.env.PORT || 3000);
app.use("/", express.static(__dirname + "/views/public"));
app.use("/script", express.static(__dirname + "/views/public/script"));
app.use("/image", express.static(__dirname + "/views/public/image"));
app.use("/css", express.static(__dirname + "/views/public/css"));
app.use("/font", express.static(__dirname + "/views/public/font"));

app.use("/", require("./router.js"));

app.listen(app.get("port"));
