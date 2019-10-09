let express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
	res.send("user page")
})

module.exports = router;