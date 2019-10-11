//declare variables of models
let User = require("../models/users.model");

module.exports.postSignup = (req, res, next) => {
	let err = [];
	let data = {};

	let checkName = (err, data) => {
		return new Promise((res,rej) => {
			User.findOne({name: req.body.accName}, (error, result) => {
				if(!result){
					data.name = req.body.accName;
					res()
				} else {
					err.push("This name was used !");
				}
			})
		})
	}
	let checkAccount = (err, data) => {
		return new Promise((res,rej) => {
			User.findOne({account: req.body.account}, (error, result) => {
				
				if(!result){
					data.account = req.body.account;
					res()
				} else {
					err.push("This account was used !");
				}
			})
		})
	}

	if(req.body.password !== req.body.rePassword){
		err.push("Your retype password does not match !");
	}
	checkName(err, data)
	.then(() => checkAccount(err, data))
	.then(() => {
		data.password = req.body.password;
	});

	if(err.length){
		res.render("pages/register",{
			errors: err
		});
		return ;
	} else {
		res.locals.data = data;
		next();
	}
}


