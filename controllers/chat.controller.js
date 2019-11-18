let User = require("../models/users.model")

module.exports.index = (req, res) => {
	User.findOne({_id : req.params.id}).exec()
	.then(user => {
		res.render("pages/chat", {
			name : user.name
		})
	})
	
}