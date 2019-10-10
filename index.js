// config
require('dotenv').config();

//declare variables of dependencied libs
let express = require("express");

//declare variables of models
let User = require("./models/users.model");

//declare variables of custom middlewares
let userRoute = require("./routes/user.route");


let app = express();

//set view engine
app.set('views', './views')
app.set('view engine', 'pug')

//using needed middlewares

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//get methods

app.get("/", (req, res) => {
	res.render("pages/login")
})

app.get("/register", (req, res) => {
	res.render("pages/register")
})

// apply route middlewares
app.use("/user", userRoute);


//post methods
app.post("/register", (req, res) => {
	//server side validate
	let err = [];
	
})


//
app.listen(process.env.PORT, () => {
	console.log(`server is running on port ${process.env.PORT}`);
})