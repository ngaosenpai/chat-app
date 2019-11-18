let User = require("../models/users.model")

module.exports.index = (req, res) => {
	res.render("pages/user")
};
module.exports.postUser = (req, res) => {
	User.find({name : { $regex: req.body.name, $options: 'i' }}).exec()
	.then(users => {
		res.render("pages/user", {
			list : users
		})
	})
	.catch(() => {
		res.render("page/user", {
			err : "found nobody!"
		})
	})
}