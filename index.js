//config
require('dotenv').config(); //read enviroment variables in .env file

//declare variables of dependencied libs
let express = require("express");
let mongoose = require("mongoose");

//connect to database
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});

//declare variables of custom middlewares
let loginRoute = require("./routes/login.route");
let signupRoute = require("./routes/signup.route");
let userRoute = require("./routes/user.route");

let app = express();

//set view engine
app.set('views', './views')
app.set('view engine', 'pug')

//using needed middlewares
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// apply route middlewares
app.use("/", loginRoute);
app.use("/signup", signupRoute);
app.use("/user", userRoute);




//
app.listen(process.env.PORT, () => {
	console.log(`server is running on port ${process.env.PORT}`);
})