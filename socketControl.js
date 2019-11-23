let User = require("./models/users.model");
let cookie = require("cookie")
module.exports = function(io){
	io.on("connection", (socket) => {
		let userId1 = cookie.parse(socket.request.headers.cookie).user;
		userId = userId1.slice(3, userId1.length-1)
		socket.userId = userId
		User.findByIdAndUpdate(userId, { socketId : socket.id }, { new : true })
		.then( user => {
			console.log(user);
		})
		
		socket.on("disconnect", (socket) => {
			console.log(`user ${userId} has just disconnected`);
		})

		socket.on("client-private-msg", data => {
			console.log(data);
		})

		//
	})
}