
let User = require("../models/users.model");
//use bcrypt to hash password
const bcrypt = require('bcrypt');

module.exports.postLogin = (req, res, next) => {
	User.findOne({account: req.body.account})
	.then(user => {
		bcrypt.compare(req.body.password, user.password)
		.then(result => {
			if(result){
				res.locals.userId = user._id
				next()
			} else {
				res.render("pages/login", {
					message : "Wrong password"
				})
			}
		})
	})
	.catch(err => {
		res.render("pages/login", {
			message : "Wrong account"
		})
	})
}