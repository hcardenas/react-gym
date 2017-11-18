var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BenchmarkSchema = new Schema({
	squat: {
  		type: String,
  		default: "N/A"
		},
	bench: {
		type: String,
		default: "N/A"
	},
	shoulder_press: {
		type: String,
		default: "N/A"
	},
	deadlift: {
		type: String,
		default: "N/A"
	},
	fran: {
		type: String,
		default: "N/A"
	},
	cindy: {
		type: String,
		default: "N/A"
	},
	mile_run: {
		type: String,
		default: "N/A"
	},
	Threek_run: {
		type: String,
		default: "N/A"
	},
	Fivek_run: {
		type: String,
		default: "N/A"
	},
	Tenk_run: {
		type: String,
		default: "N/A"
	},
	issabelle: {
		type: String,
		default: "N/A"
	}
});

var Benchmark = mongoose.model("Benchmark", BenchmarkSchema);

module.exports = Benchmark;
