const router = require("express").Router();
const userRoutes = require("./user");

router.use("/signup", userRoutes);
router.use("/login", userRoutes);

module.exports = router;