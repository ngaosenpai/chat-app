module.exports.index = (req, res) => {
	res.render("pages/user", {
		id : req.signedCookies.user_id
	})
};