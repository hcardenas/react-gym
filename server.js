const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");


const app = express();





const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);






// Start the API server
const server = app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
 
});

const io = require('socket.io')(server);

io.on('connection', function(socket) {
	console.log('We have a connection');
	socket.on('new-msg', function(msg) {
		console.log(`server recieved ${msg}`);
		io.emit('send-msg', msg);
	});

	socket.on('new-session', function(msg) {
		console.log(`server recieved signal of a new session`);
		io.emit('send-session', msg);
	});

	socket.on('delete-session', function(id) {
		console.log(`server recieved delete-session`);
		io.emit('del-session', id);
	});
	socket.on('edit-session', function(obj) {
		console.log(`server recieved edit-session ${JSON.stringify(obj)}`);
		io.emit('ed-session', obj);
	});
});
