const bcrypt = require("bcryptjs");
const User = require("../models/user");
const passport = require("passport-local");
const LocalStrategy = require("passport-local").Strategy;

module.exports = (passport) => {
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    // Find users
    User.findOne({ email: email }).then((user) => {
      if (!user) {
        const newUser = new User({ email, password });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then((user) => {
                return done(null, user);
              })
              .catch((err) => {
                return done(null, false, { message: err });
              });
          });
        });
      } else {
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;

          if(isMatch) {
            return done(null, user);
          } else {
            return done(null, false, {message: "Wrong password"});
          }
        });
      }
    });
  })
);
}

