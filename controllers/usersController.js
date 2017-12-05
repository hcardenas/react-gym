const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .populate("sessions")
      .populate("benchmarks")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .populate("sessions")
      .populate("benchmark")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByFirebase: function(req, res) {
    console.log(req.params.id);
    db.User
      .findOne({'firebase_id': req.params.id})
      .populate("sessions")
      .populate("benchmark")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUsername: function(req, res) {
    console.log(req.params.id);
    db.User
      .findOne({'username': req.params.id})
      .populate("sessions")
      .populate("benchmark")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createSession: function(req, res) {
    db.Session
      .create(req.body)
      .then(function (dbSession) {
        db.User
          .findOneAndUpdate({_id: req.params.id}, {$push: {sessions: dbSession}})
          .then(function(dbRes) {res.json(dbRes)})
      })
      .catch(err => res.status(422).json(err));
  },
  createBenchmark: function(req, res) {
    console.log('here');
    db.Benchmark
      .create({bench: "N/A"})
      .then(function (dbBenchmark) {
        console.log('created benchmark');
        db.User
          .findOneAndUpdate({firebase_id: req.params.id}, {$set: {benchmark: dbBenchmark}})
          .then(function(dbRes) {res.json(dbRes)})
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
