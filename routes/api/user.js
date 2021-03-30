const router = require("express").Router();
const usercontroller = require("../../controllers/usercontroller");

router.route("/signup")
    .get(usercontroller.findAll)
    .post(usercontroller.create);

router
    .route("/:id")
    .get(usercontroller.findById);
      
module.exports = router;