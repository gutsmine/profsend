var router = require("express").Router();

router.get("/", (req, res) => {
    res.render("./public/top.ejs");
});
router.get("/top.html", (req, res) => {
    res.render("./top.ejs");
});
router.get("/about.html", (req, res) => {
    res.render("./about.ejs");
});
router.get("/13update.html", (req, res) => {
    res.render("./13update.ejs");
});


module.exports = router;