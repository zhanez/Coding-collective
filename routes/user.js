const router = require("express").Router();
const userController = require("../controllers/usercontroller");

// Matches with "/api/books"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(userController.findById);

module.exports = router;