var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use("/", express.static('./data/public'));

app.get('/', function(req, res) {
    res.sendFile('./data/public/top.html', { root: __dirname });
});

app.get('/top.html', function(req, res) {
    res.sendFile('./data/public/top.html', { root: __dirname });
});

app.get('/about.html', function(req, res) {
    res.sendFile('./data/public/about/about.html', { root: __dirname });
});

app.get('/13update.html', function(req, res) {
    res.sendFile('./data/public/13pudate/13pudate.html', { root: __dirname });
});

app.listen(app.get('port'))