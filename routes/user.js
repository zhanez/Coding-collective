const router = require("express").Router();
const userController = require("../controllers/usercontroller");
const authenticateUser = require("./middleware/authenticateUser");

router.route("/")
  .get(authenticateUser, userController.findUser)
  .post(userController.create);

router.route("/all")
  .get(authenticateUser, userController.findAll);

module.exports = router;