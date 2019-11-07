module.exports.index = (req, res) => {
	res.render("pages/login",{
		message : ""
	});
};
module.exports.login = (req, res) => {
	res.send("ok")
}