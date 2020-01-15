var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.use("/", express.static('./data/public'));

app.get('/', function(req, res) {
    res.sendFile('top.html', { root: __dirname + '/data/public/'});
});

app.get('/top.html', function(req, res) {
    res.sendFile('top.html', { root: __dirname + '/data/public/'});
});

app.get('/about.html', function(req, res) {
    res.sendFile('about.html', { root: __dirname + '/data/public/'});
});

app.get('/13update.html', function(req, res) {
    res.sendFile('13pudate.html', { root: __dirname + '/data/public/'});
});

app.listen(app.get('port'));