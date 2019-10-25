var router = require("express").Router();

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

module.exports = router;