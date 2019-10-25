var express = require('express')
var app = express();
var session = require('express-session');
var i18n = require("i18n");
var router = require("express").Router();

app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 3000));
app.use("/", express.static('./data/public'));

router.get("/", (req, res) => {
    res.render("./data/public/top.ejs");
});
router.get("/top.html", (req, res) => {
    res.render("./data/public/top.ejs");
});
router.get("/about.html", (req, res) => {
    res.render("./data/public/about.ejs");
});
router.get("/13update.html", (req, res) => {
    res.render("./data/public/13update.ejs");
});

i18n.configure({
  // 利用するlocalesを設定。これが辞書ファイルとひも付きます
  locales: ['ja', 'en'],
  defaultLocale: 'ja',
  // 辞書ファイルのありかを指定
  directory: __dirname + "/locales",
  // オブジェクトを利用したい場合はtrue
  objectNotation: true
});

app.use(i18n.init);
app.use(function (req, res, next) {
  if (req.session.locale) {
    i18n.setLocale(req, req.session.locale);
  }
  next();
});
app.listen(app.get('port'));