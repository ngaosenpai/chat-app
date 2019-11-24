let User = require("./models/users.model");
let PConnection = require("./models/privateConnections.model")
let cookie = require("cookie")
module.exports = function(io){
	io.on("connection", (socket) => {
		let userId1 = cookie.parse(socket.request.headers.cookie).user;
		userId = userId1.slice(3, userId1.length-1)
		socket.userId = userId

		socket.emit("start-status", userId)

		User.findByIdAndUpdate(userId, { socketId : socket.id }, { new : true })
		.then( user => {
			socket.userName = user.name
			console.log(user);
		})
		
		socket.on("disconnect", (socket) => {
			console.log(`user ${userId} has just disconnected`);
		})

		socket.on("client-private-msg", data => {
			PConnection.findOne({
				connectKey : {$in: [data.from+"&"+data.to, data.to+"&"+data.from]},
			}).exec()
			.then(PC => {
				if(PC == null){
					let pConnection = new PConnection({
						connectKey : data.from+"&"+data.to,
						msg : [{sender: socket.userName, content: data.content}]
					});
					pConnection.save()
					.then(res => {
						console.log("saved !"+ res)
						// console.log(res.msg[-1].time );
						// data.time = res.msg[-1].time 
					})
					.catch(err => console.log(err.message))
				} else {
					PC.updateOne({$push: {
						msg: {sender: socket.userName, content: data.content}
					}})
					.then(res => {
						console.log("saved 2 !"+res)
						// console.log(res.msg);
						// data.time = res.msg[-1].time
					})
					.catch(err => console.log(err.message))
				}
			})
			.catch(err => console.log(err.message))
			// find receiver
			User.findById(data.to).exec()
			.then(receiver => {
				if(receiver.socketId){
					io.to(receiver.socketId).emit("server-private-msg",{
						type : "received",
						content : data.content,
						time : data.time
					})
				}
				socket.emit("server-private-msg", {
					type : "sent",
					content : data.content,
					time : data.time
				})
			})
		})

		//
	})

}