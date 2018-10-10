const router = require("express").Router();
const resultController = require("../../controller/resultController");

// Matches with "/api/books"
router.route("/")
  .get(resultController.findAll)
  .post(resultController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(resultController.findById)
  .put(resultController.update)
  .delete(resultController.remove);

module.exports = router;
