const router = require("express").Router();
const benchmarksController = require("../../controllers/benchmarksController");

// Matches with "/api/books"
router.route("/")
  .get(benchmarksController.findAll)

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(benchmarksController.findById)
  .put(benchmarksController.update)
  .delete(benchmarksController.remove);

module.exports = router;
