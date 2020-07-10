var router = require("express").Router();

router.get("/", function (req, res) {
  res.render("./public/top.ejs");
});

router.get("/top.html", function (req, res) {
  res.render("./public/top.ejs");
});

router.get("/about.html", function (req, res) {
  res.render("./public/about.ejs");
});

router.get("/top", function (req, res) {
  res.render("./public/top.ejs");
});

router.get("/about", function (req, res) {
  res.render("./public/about.ejs");
});

router.get("/13update", function (req, res) {
  res.render("./public/13update.ejs");
});
router.get("/13update.html", function (req, res) {
  res.render("./public/13update.ejs");
});
router.get("/top.pwa", function (req, res) {
  res.sendFile("top.pwa.html", { root: __dirname + "/views/public/" });
});
router.get("/13update.pwa", function (req, res) {
  res.sendFile("13update.pwa.html", { root: __dirname + "/views/public/" });
});
router.get("/about.pwa", function (req, res) {
  res.sendFile("about.pwa.html", { root: __dirname + "/views/public/" });
});
router.get("/scaner.html", function (req, res) {
  res.sendFile("scaner.html", { root: __dirname + "/views/public/" });
});
router.get("/scaner", function (req, res) {
  res.sendFile("scaner.html", { root: __dirname + "/views/public/" });
});
router.get("/scaner.html", function (req, res) {
  res.sendFile("scaner.html", { root: __dirname + "/views/public/" });
});

module.exports = router;
