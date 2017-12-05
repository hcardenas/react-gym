const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/books"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/books/:id"
router
  .route("/user/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

router
  .route("/firebase/:id")
  .get(usersController.findByFirebase);

router
  .route("/username/:id")
  .get(usersController.findByUsername);

 router
  .route("/session/:id")
  .post(usersController.createSession);

 router
  .route("/benchmark/:id")
  .post(usersController.createBenchmark);

module.exports = router;
