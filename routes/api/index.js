const router = require("express").Router();
const feedRoutes = require("./feeds");

router.use("/feeds", feedRoutes);

module.exports = router;