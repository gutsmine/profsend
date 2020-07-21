var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();
var cookieParser = require("cookie-parser");
app.use(cookieParser());
app.set("port", process.env.PORT || 3000);
app.use("/", express.static(__dirname + "/views/public"));
app.use("/script", express.static(__dirname + "/views/public/script"));
app.use("/image", express.static(__dirname + "/views/public/image"));
app.use("/css", express.static(__dirname + "/views/public/css"));

app.use("/", require("./router.js"));

app.listen(app.get("port"));
