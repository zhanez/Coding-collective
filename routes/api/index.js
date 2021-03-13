const router = require("express").Router();
const userRoutes = require("./user");

router.use("/signup", userRoutes);

module.exports = router;