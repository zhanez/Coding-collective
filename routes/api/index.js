const router = require("express").Router();
const userRoutes = require(".");

router.use("/signup", userRoutes);
router.use("/login", userRoutes);
router.use("/feed", userRoutes);

module.exports = router;