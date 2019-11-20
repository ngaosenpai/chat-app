let mongoose = require("mongoose")

let socketSchema = new mongoose.Schema({
	userName : String,
	userId : String,
	socket : mongoose.Schema.Types.Mixed
})

let Socket = mongoose.model("Socket", socketSchema, "sockets");

module.exports = Socket;