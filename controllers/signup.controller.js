//declare variables of models
let User = require("../models/users.model");

//use bcrypt to hash password
const bcrypt = require('bcrypt');

module.exports.index = (req, res) => {
	res.render("pages/register")
};

module.exports.createUser = (req, res) => {
	//
	console.log("validated!");
	console.log(res.locals);
	let user = new User(res.locals)
	bcrypt.hash(user.password, 10)
	.then( hash => {
		user.password = hash
		user.save()
	})
	.then(user => {
		res.redirect("/")
	})
	.catch(err => res.render("pages/register", {
		errors : "Unable to save to database !"
	}))

}