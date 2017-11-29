var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  firebase_id: {
    type: String,
    required: true,
    unique: true
  },
  profile_pic: {
    type: String,
    default: "http://profile.actionsprout.com/default.jpeg"
  },
  bio: {
    type: String,
    required: false,
    default: "Update your bio!"
  },
  sessions: [{
    type: Schema.Types.ObjectId,
    ref: "Session"
  }],
  benchmark: {
    type: Schema.Types.ObjectId,
    ref: "Benchmark"
  }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
