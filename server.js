// const express = require("express");
// const path = require("path");
// const PORT = process.env.PORT || 3001;
// const app = express();
// const mongoose = require('mongoose');

// // adding passport.js for user authentication
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var User = require('./models/user/User.js');
// const routes = require('./routes');
// app.use(routes);

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// // define middleware 
// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());

// // initialize passport and express session
// app.use(require('express-session')({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// // Send every request to the React app
// // Define any API routes before this runs

// app.get('/test', (req, res) => {
//   console.log({test: true})
//   res.json({test: true})
// })
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/public/index.html"));
// });



// app.listen(PORT, function() {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes');
var passport = require('passport');
var User = require('./models/user/User.js');
var LocalStrategy = require('passport-local').Strategy;


const app = express();
const PORT = process.env.PORT || 3001;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// add routes
app.use(routes);
// connect to db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/node-auth')
.then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});