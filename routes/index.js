const router = require("express").Router();
const userRoutes = require("./user");
const authRoutes = require("./authentication");
const feedRoutes = require("./api");
const path = require("path");

router.use("/api/user", userRoutes);

router.use("/api", feedRoutes);

router.use("/auth", authRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;


