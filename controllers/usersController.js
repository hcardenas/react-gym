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
      .populate("benchmarks")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByFirebase: function(req, res) {
    console.log(req.params.id);
    db.User
      .find({'firebase_id': req.params.id})
      .populate("sessions")
      .populate("benchmarks")
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
    db.Benchmark
      .create(req.body)
      .then(function (dbBenchmark) {
        db.User
          .findOneAndUpdate({_id: req.params.id}, {$set: {benchmarks: dbBenchmark}})
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
