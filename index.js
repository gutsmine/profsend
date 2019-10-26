var express = require('express')
var app = express();
var session = require('express-session');
var i18n = require("i18n");
var router = require("express").Router();

app.set("view engine", "ejs");
app.use("/", express.static('./data/public'));
app.use(express.favicon(express.favicon(__dirname + '/data/public/image/favicon.ico')));

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
  locales: ['ja', 'en'],
  defaultLocale: 'ja',
  directory: __dirname + "/data/locales",
  objectNotation: true
});

app.use(i18n.init);
app.use(function (req, res, next) {
  if (req.session.locale) {
    i18n.setLocale(req, req.session.locale);
  }
  next();
});
app.listen(3000);