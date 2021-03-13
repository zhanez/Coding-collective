const router = require("express").Router();
const usercontroller = require("../../controllers/usercontroller");
const db = require("../../controllers/usercontroller");

router.route("/signup")
    .get(usercontroller.findAll)
    .post(usercontroller.create);

module.exports = router;