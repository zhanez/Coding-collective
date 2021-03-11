// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const router = require("express").Router();

// Send every request to the React app
// Define any API routes before this runs
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;