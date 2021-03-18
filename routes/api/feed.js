const router = require("express").Router();
const feedController = require("../../controllers/feedcontroller");

router.route("/feed")
    .get(feedController.findAll)
    .post(feedController.create)
    .put(feedController.update);

router
    .route("/:id")
    .get(feedcontroller.findbyID)
    .put(feedcontroller.update)
    .delete(feedcontroller.remove);

module.exports = router;