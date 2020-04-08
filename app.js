var express = require("express");
var app = express();
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use("/", express.static(__dirname + "/views/public"));
app.use("/script", express.static(__dirname + "/views/public/script"));
app.use("/image", express.static(__dirname + "/views/public/image"));
app.use("/css", express.static(__dirname + "/views/public/css"));

app.use("/", require("./router.js"));

app.listen(app.get("port"));
