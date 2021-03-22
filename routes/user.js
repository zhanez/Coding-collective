const router = require("express").Router();
const userController = require("../controllers/usercontroller");
const authenticateUser = require("./middleware/authenticateUser");

router.route("/")
  .get(authenticateUser, userController.findUser)
  .post(userController.create);

router
  .route("/:id")
  .get(userController.findById);

module.exports = router;