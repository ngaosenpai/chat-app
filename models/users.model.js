let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
	name: String,
	account: String,
	password: String,
	socketId : String
});

let User = mongoose.model("User", userSchema, "users")
//first para is name of model, second is schema, final is name of collection in db
module.exports = User;