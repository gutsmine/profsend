var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 3000));
app.use("/", express.static('./data/public'));
app.use("/", require("./router.js"))
 app.listen(app.get('port'));