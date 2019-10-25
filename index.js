var express = require('express')
var app = express();
var session = require('express-session');
var i18n = require("i18n");

app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));
app.use("/", express.static('./data/public'));

app.use(i18n.init);
// manual‚Åi18nƒZƒbƒVƒ‡ƒ“ŠÇ—‚Å‚«‚é‚æ‚¤‚Éİ’è‚µ‚Ä‚¨‚«‚Ü‚·
app.use(function (req, res, next) {
  if (req.session.locale) {
    i18n.setLocale(req, req.session.locale);
  }
  next();
});
app.listen(app.get('port'), function () {
console.log("Server started.");
});