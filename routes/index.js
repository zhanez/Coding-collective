const router = require("express").Router();
const apiRoutes = require("./user");
const authRoutes = require("./authentication");
const feedRoutes = require("./feed")

router.use("/api/user", apiRoutes);

router.use("/api/feed", feedRoutes)

router.use("/auth", authRoutes);

module.exports = router;


