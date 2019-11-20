let Socket = require("./models/sockets.model");
let User = require("./models/users.model");
let cookie = require("cookie")
module.exports = function(io){
	io.on("connection", (socket) => {
		let userId1 = cookie.parse(socket.request.headers.cookie).user;
		userId = userId1.slice(3, userId1.length-1)
		socket.userId = userId
		Socket.findOne({userId : userId})
		.then(sk => {
			if(!sk)
				User.findOne({_id : userId}).exec()
				.then(user => {
					socket.userName = user.name;
					newSocket = new Socket({
						userName : user.name,
						userId : userId,
						socket : socket
					});
					newSocket.save(err => {
						if(!err)
							console.log(`new user(${socket.userId}) has just connected`);
					})
				})
			else{
				console.log(`Old user(${sk.userId}) has just connected`);
			}
		})
		.catch(err => {
			console.log(err.message);
		})
		socket.on("disconnect", (socket) => {
			console.log(`user ${userId} has just disconnected`);
		})
	})
}