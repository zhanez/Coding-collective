// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongostore")(session);
// Requiring passport as we've configured it
const passport = require("passport");
require("./config/passport")
const mongoose = require("mongoose");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/codingcollective", {
  useNewUrlParser: true
});

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("client/build"));
app.use(
  session({
    secret: "so secret this should be",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const authRoutes = require("./routes/authRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

app.use(
  authRoutes, 
  htmlRoutes
);

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
