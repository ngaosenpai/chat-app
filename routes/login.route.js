//declare variables of dependencied libs
let express = require("express");

//declare variables of models
let User = require("../models/users.model");

//declare controller
let controller = require("../controllers/login.controller");

let validate = require("../middlewares/validate.login");

//declare router
let router = express.Router();

router.get("/", controller.index);
router.post("/", validate.postLogin, controller.login);

module.exports = router;