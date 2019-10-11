//declare variables of dependencied libs
let express = require("express");

//declare variables of models
let User = require("../models/users.model");

//declare controller
let controller = require("../controllers/signup.controller");

//declare middleware validate
let validate = require("../middlewares/validate.signup");

//declare router
let router = express.Router();

router.get("/", controller.index);

router.post("/", validate.postSignup, controller.createUser);

module.exports = router;