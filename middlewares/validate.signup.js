//declare variables of models
let User = require("../models/users.model");

module.exports.postSignup = (req, res, next) => {
	let err = [];

	let checkName = (err) => {
		return new Promise((resolve, reject) => {
			User.findOne({name: req.body.accName}, (error, result) => {
				if(!result){
					resolve(res.locals.name = req.body.accName)
				} else {
					return reject("This name was used !");
				}
			})
		})
	}
	let checkAccount = (err) => {
		return new Promise((resolve, reject) => {
			User.findOne({account: req.body.account}, (error, result) => {
				
				if(!result){
					resolve(res.locals.account = req.body.account)
				} else {
					return reject("This account was used !");
				}
			})
		})
	}
	let checkMatch = (err) => {
		return new Promise((resolve, reject) => {
			if(req.body.password !== req.body.rePassword){
				reject("Your retype password does not match !")
			} else {
				resolve(res.locals.password = req.body.password)
			}
		})
	}
	
	checkName(err)
	.then(() => checkAccount(err))
	.then(() => checkMatch(err))
	.then(() => {
		next();
	})
	.catch((error) => {
		err.push(error);
		if(err.length){
			res.render("pages/register",{
				errors: err
			});
		}
	});

}


