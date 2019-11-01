module.exports.index = (req, res) => {
	res.render("pages/login", {
		message : req.flash('greet')
	});
};
module.exports.login = (req, res) => {
	//
}