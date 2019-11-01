//declare variables of models
let User = require("../models/users.model");

module.exports.index = (req, res) => {
	res.render("pages/register")
};

module.exports.createUser = (req, res) => {
	//
	console.log("validated!");
	console.log(res.locals);
	let user = new User(res.locals)
	user.save()
	.then(user => {
		req.flash('greet', `Welcome ${user.name}`) //it's been used in login.controller
		res.redirect("/")
	})
	.catch(err => res.render("pages/register", {
		errors : "Unable to save to database !"
	}))

}