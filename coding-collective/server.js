// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");
const mongoose = require("mongoose");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./db");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/codingcollective", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require("./routes/authRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

app.use(
  authRoutes, 
  htmlRoutes
);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});