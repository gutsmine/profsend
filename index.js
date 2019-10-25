var express = require('express')
var app = express();
var session = require('express-session');
var i18n = require("i18n");

app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));
app.use("/", express.static('./data/public'));

app.use(i18n.init);
// manualでi18nセッション管理できるように設定しておきます
app.use(function (req, res, next) {
  if (req.session.locale) {
    i18n.setLocale(req, req.session.locale);
  }
  next();
});
app.listen(app.get('port'), function () {
console.log("Server started.");
});