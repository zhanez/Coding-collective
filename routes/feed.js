const router = require("express").Router();
const feedController = require("../controllers/feedcontroller");

// Matches with "/api/feeds"
router.route("/")
  .get(feedController.findAll)
  .post(feedController.create);

// Matches with "/api/feeds/:id"
router
  .route("/:id")
  .get(feedController.findById)
  .put(feedController.update)
  .delete(feedController.remove);

module.exports = router;