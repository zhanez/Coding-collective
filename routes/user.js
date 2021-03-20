const router = require("express").Router();
const userController = require("../controllers/usercontroller");
const authenticateUser = require("./middleware/authenticateUser");

// Matches with "/api/books"
router.route("/")
  .get(authenticateUser, userController.findUser)
  .post(userController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(userController.findById);

module.exports = router;