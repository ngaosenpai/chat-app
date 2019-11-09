module.exports.index = (req, res) => {
	res.render("pages/login",{
		message : ""
	});
};
module.exports.login = (req, res) => {
	res.cookie("user_id", res.locals.userId, {
		signed : true
	})
	res.redirect("/user")
}