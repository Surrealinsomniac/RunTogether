var passport = require("passport");
var FitbitStrategy = require("passport-fitbit-oauth2").FitbitOAuth2Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = require("../models/User");
require("https").globalAgent.options.rejectUnauthorized = false;

passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
      User.findById(id).then(user => {
          done(null, user);
      });
  });

passport.use(
  new FitbitStrategy(
    {
      clientID: keys.fitbit_client_id,
      clientSecret: keys.fitbit_client_secret,
      callbackURL: "http://localhost:5000/auth/fitbit/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ fitbitId: profile.id }).then(currentUser => {
        if (currentUser) {
          console.log("user is", currentUser);
        } else {
          new User({
            fitbitId: profile.id,
            displayName: profile.displayName,
            age: profile._json.user.age,
            avgDailySteps: profile._json.user.averageDailySteps
          })
            .save()
            .then(newUser => {
              console.log("new user created" + newUser);
            });
        }
      });
    }
  )
);
