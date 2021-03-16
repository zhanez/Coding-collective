// Requiring necessary npm packages
require("dotenv").config()
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongostore")(session);
// Requiring passport as we've configured it
const passport = require("passport");
require("./config/passport")
const mongoose = require("mongoose");
const routes = require("./routes")

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/codingcollective", {
  useNewUrlParser: true
});


app.use(passport.initialize());
// Passport config
passport.use( require("./config/jwtPassportStrategy") );

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes
app.use(routes);

// Syncing our database and logging a message to the user upon success
// db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
// });
