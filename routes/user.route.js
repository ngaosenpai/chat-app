//declare variables of dependencied libs
let express = require("express");
//declare controller
let controller = require("../controllers/user.controller");

//declare router
let router = express.Router();

router.get("/", controller.index);

router.post("/", controller.postUser);

module.exports = router;