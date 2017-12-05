import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/users");
  },
  getSessions: function () {
    return axios.get("/api/sessions");
  },
  getBenchmarks: function () {
    return axios.get("/api/benchmarks");
  },
  getUser: function(id) {
    return axios.get("/api/users/user/" + id);
  },
  getFireBaseUser: function(firebaseId) {
    return axios.get("/api/users/firebase/" + firebaseId);
  },
  getUsername: function(id) {
    return axios.get("/api/users/username/" + id);
  },
  getSession: function(id) {
    return axios.get("/api/sessions/" + id);
  },
  getBenchmark: function(id) {
    return axios.get("/api/benchmarks/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/user/" + id);
  },
  deleteSession: function(id) {
    return axios.delete("/api/sessions/" + id);
  },
  deleteBenchmark: function (id) {
    return axios.delete("/api/benchmarks/" + id);
  },
  // Saves a book to the database
  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  createSession: function(sessionData, id) {
    return axios.post("/api/users/session/" + id, sessionData);
  },
  createBenchmark: function(benchmarkData, id) {
    return axios.post("/api/users/benchmark/" + id, benchmarkData);
  },
  updateUser: function(userData, id) {
    return axios.put("/api/users/user/" + id, userData);
  },
  updateSession: function(sessionData, id) {
    return axios.put("/api/sessions/" + id, sessionData);
  },
  updateBenchmark: function(benchmarkData, id) {
    return axios.put("/api/benchmarks/" + id, benchmarkData);
  }
};
