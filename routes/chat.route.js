//declare variables of dependencied libs
let express = require("express");
//declare controller
let controller = require("../controllers/chat.controller");

//declare router
let router = express.Router();

router.get("/:id", controller.index);

module.exports = router;