const router = require("express").Router();
const feedController = require("../../controllers/feedcontroller");

router.route("/")
  .get(feedController.findAll)
  .post(feedController.create);

router
  .route("/:id")
  .get(feedController.findById)
  .put(feedController.update)
  .delete(feedController.remove);

module.exports = router;