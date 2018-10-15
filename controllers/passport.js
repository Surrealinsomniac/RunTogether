var passport = require("passport");
var FitbitStrategy = require("passport-fitbit-oauth2").FitbitOAuth2Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model('users');
// const User = require("../models/User");
// require("https").globalAgent.options.rejectUnauthorized = false;

passport.serializeUser((user, done) => {
    console.log("serializeUser", user.id)
    done(null, user.id);
  });

  passport.deserializeUser((user, done) => {
      User.findById(user.id).then(user => {
        console.log("deserialize user here", user)
        done(null, user);
      });
  });

 passport.use(new FitbitStrategy(
    {
      clientID: keys.fitbit_client_id,
      clientSecret: keys.fitbit_client_secret,
      callbackURL: 'http://localhost:5000/auth/fitbit/callback',
      proxy: true
    },
    function (accessToken, refreshToken, profile, done) {
        // console.log(profile)
        // console.log(accessToken)
      User.findOne({ fitbitId: profile.id }).then(currentUser => {
        if (currentUser) {
        //   console.log("user is", currentUser);
         return done(null, currentUser)
        } else {
          new User({
            fitbitId: profile.id,
            displayName: profile.displayName,
            age: profile._json.user.age,
            avgDailySteps: profile._json.user.averageDailySteps
          })
            .save()
            .then(newUser => {
            //   console.log("new user created" + newUser);
              done(null, newUser)
            });
            // console.log("access token", accessToken);
            // console.log("refresh token ", refreshToken);
            // console.log("profile:", profile);
        }
      });
    }
));
 

