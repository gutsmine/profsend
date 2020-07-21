var router = require("express").Router();

router.get("/", function (req, res) {
  res.sendFile("top.html", { root: __dirname + "/views/public/" });
});

router.get("/top.html", function (req, res) {
  res.sendFile("top.html", { root: __dirname + "/views/public/" });
});

router.get("/about.html", function (req, res) {
  res.sendFile("about.html", { root: __dirname + "/views/public/" });
});

router.get("/top", function (req, res) {
  res.sendFile("top.html", { root: __dirname + "/views/public/" });
});

router.get("/about", function (req, res) {
  res.sendFile("about.html", { root: __dirname + "/views/public/" });
});

router.get("/13update", function (req, res) {
  res.sendFile("13update.html", { root: __dirname + "/views/public/" });
});
router.get("/13update.html", function (req, res) {
  res.sendFile("13update.html", { root: __dirname + "/views/public/" });
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
router.get("/pwa.top", function (req, res) {
  res.sendFile("pwa.top.html", { root: __dirname + "/views/public/" });
});

module.exports = router;
