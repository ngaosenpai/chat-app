let mongoose = require("mongoose");
let connectionSchema = new mongoose.Schema({
	connectKey : String,
	msg : [{
		sender : String,
		content : String,
		time : {type : Date, default : Date.now}
	}]
})

let privateConnection = mongoose.model("privateConnection", connectionSchema, "privates");

module.exports = privateConnection;