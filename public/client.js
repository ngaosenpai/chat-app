let body = document.getElementById("content")
let content = document.getElementById("text")
let btn = document.getElementById("btn")
let startStatus = {};
let socket = io.connect();

//

let path = window.location.pathname;
path = path.slice(6)
//
socket.on("connect", () => {
	console.log("connecting !");
	//modify online status here later
})
socket.on("start-status", userId => {
	startStatus.userId = userId
})

btn.addEventListener("click", function(){
	socket.emit("client-private-msg", {
		content : content.value,
		from : startStatus.userId, //sender was issued a Id from server: 7th line
		to : path //reciever 
	})
	content.value = ""
})
socket.on("server-private-msg", data => {
	let content = document.createTextNode(data.content)
	let p = document.createElement("p")
	p.appendChild(content)
	//let small = document.createElement("small").appendChild(document.createTextNode(data.time))
	let li = document.createElement("li")
	li.className = data.type
	li.appendChild(p)
	body.appendChild(li)
})