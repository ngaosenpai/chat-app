// config
require('dotenv').config();

//declare variables of dependencied libs
let express = require("express");

//declare variable of custom middlewares
let userRoute = require("./routes/user.route");


let app = express();

//set view engine
app.set('views', './views')
app.set('view engine', 'pug')

//using needed middlewares


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



//
app.listen(process.env.PORT, () => {
	console.log(`server is running on port ${process.env.PORT}`);
})