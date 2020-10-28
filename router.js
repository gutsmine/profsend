var router = require("express").Router();
var csrf = require('csurf');
var fs = require("fs")
var csrfProtection = csrf({ cookie: false });


router.get("/", csrfProtection, function (req, res) {
  res.sendFile("top.html", { root: __dirname + "/views/public/" });
});

router.get("/top.html", csrfProtection, function (req, res) {
  res.sendFile("top.html", { root: __dirname + "/views/public/" });
});

router.get("/about.html", csrfProtection, function (req, res) {
  res.sendFile("about.html", { root: __dirname + "/views/public/" });
});

router.get("/top", csrfProtection, function (req, res) {
  res.sendFile("top.html", { root: __dirname + "/views/public/" });
});

router.get("/about", csrfProtection, function (req, res) {
  res.sendFile("about.html", { root: __dirname + "/views/public/" });
});

router.get("/13update", csrfProtection, function (req, res) {
  res.sendFile("13update.html", { root: __dirname + "/views/public/" });
});
router.get("/13update.html", csrfProtection, function (req, res) {
  res.sendFile("13update.html", { root: __dirname + "/views/public/" });
});
router.get("/top.pwa", csrfProtection, function (req, res) {
  res.sendFile("top.pwa.html", { root: __dirname + "/views/public/" });
});
router.get("/13update.pwa", csrfProtection, function (req, res) {
  res.sendFile("13update.pwa.html", { root: __dirname + "/views/public/" });
});
router.get("/about.pwa", csrfProtection, function (req, res) {
  res.sendFile("about.pwa.html", { root: __dirname + "/views/public/" });
});
router.get("/pwa.top", csrfProtection, function (req, res) {
  res.sendFile("pwa.top.html", { root: __dirname + "/views/public/" });
});
router.get("/share/:id", csrfProtection, function (req, res) {
  res.cookie('id', req.params.id)
  res.sendFile("share.html", { root: __dirname + "/views/public/" });
});
const readJson = (filePath) => {
  return new Promise(resolve => {
    fs.readFile(filePath, (err, data) => {
      resolve(JSON.parse(data))
    })
  })
}

router.get('/valut', (req, res) => {
  readJson('valut.json').then(data => { res.json(data) })
})

module.exports = router;
