var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SessionSchema = new Schema({
  	url_video: {
  		type: String,
  		required: false
	},
	date: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		required: true
	},
	score: {
		type: String,
		required: true
	}
});

var Session = mongoose.model("Session", SessionSchema);

module.exports = Session;
