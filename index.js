//config
require('dotenv').config(); //read enviroment variables in .env file


//declare variables of dependencied libs
let express = require("express");
//
let cookieParser = require('cookie-parser')
// let session = require('express-session')
//
let mongoose = require("mongoose");
//connect to database
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});

//declare variables of custom middlewares
let loginRoute = require("./routes/login.route");
let signupRoute = require("./routes/signup.route");
let userRoute = require("./routes/user.route");
let chatRoute = require("./routes/chat.route");
let authorizing = require("./middlewares/authorized.login");

let app = express();
//
let server = require('http').Server(app);


//set view engine
app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.static('public'))
// // use session middleware
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }))
  
// // Use connect-flash middleware.  This will add a `req.flash()` function to
// // all requests, matching the functionality offered in Express 2.x.
// app.use(flash());

//using needed middlewares
app.use(cookieParser(process.env.SECRET_KEY)) //use cookieParser middleware
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// apply route middlewares
app.use("/", loginRoute);
app.use("/signup", signupRoute);
app.use("/user", authorizing.checkAuth, userRoute);
app.use("/chat", authorizing.checkAuth, chatRoute);


//
server.listen(process.env.PORT, () => {
	console.log(`server is running on port ${process.env.PORT}`);
})
let io = require('socket.io')(server)

// use io for socketio
let socketControl = require("./socketControl")(io);