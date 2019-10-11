//declare variables of models
let User = require("../models/users.model");

module.exports.index = (req, res) => {
	res.render("pages/register")
};

module.exports.createUser = (req, res) => {
	//
	console.log("validated!");
	console.log(res.locals.data);
	console.log(res.locals.data.name);
	console.log(res.locals.data.account);
	console.log(res.locals.data.password);
}