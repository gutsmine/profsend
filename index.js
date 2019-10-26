var express = require('express')
var app = express();
var session = require('express-session');
var i18n = require("i18n");

app.set("view engine", "ejs");
app.use("/", express.static('./data/public'));
app.use("/", require("./router.js"));

var router = require("express").Router();
app.use(function (req, res, next) {
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
});
module.exports = router;

i18n.configure({
  // ���p����locales��ݒ�B���ꂪ�����t�@�C���ƂЂ��t���܂�
  locales: ['ja', 'en'],
  defaultLocale: 'ja',
  // �����t�@�C���̂��肩���w��
  directory: __dirname + "/data/locales",
  // �I�u�W�F�N�g�𗘗p�������ꍇ��true
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