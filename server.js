// Requiring necessary npm packages
require("dotenv").config()
const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const routes = require("./routes");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());
// Passport config
passport.use( require("./config/jwtPassportStrategy") );

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(require("./routes/upload") );
app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/codingcollective", 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
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
