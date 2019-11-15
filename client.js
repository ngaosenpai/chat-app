let socket = io.connect();
socket.on("connect", () => {
	console.log("connecting !");
})
