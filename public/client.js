let content = document.getElementById("text")
let btn = document.getElementById("btn")
let socket = io.connect();

// 
let cookies = {};
let pairs = document.cookie.split(";");

let path = window.location.pathname;
path = path.slice(6)
//
socket.on("connect", () => {
	console.log("connecting !");
	//modify online status here later
})

btn.addEventListener("click", function(){
	socket.emit("client-private-msg", {
		content : content.value,
		from : socket.userId, //sender was issued a Id from server: 7th line
		to : path
	})
})