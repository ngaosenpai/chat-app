//declare variables of dependencied libs
let express = require("express");

//declare variables of models
let User = require("../models/users.model");

//declare controller
let controller = require("../controllers/user.controller");

//declare router
let router = express.Router();

router.get("/", controller.index);

router.post("/:id", controller.postUser);

module.exports = router;