const router = require("express").Router();
const userController = require("../controllers/usercontroller");
const authenticateUser = require("./middleware/authenticateUser");

router.route("/")
  .get(userController.findUser)
  .post(userController.create);

router.route("/all")
  .get(userController.findAll);

router.route("/classmate/:id")
  .get(userController.findById);

module.exports = router;