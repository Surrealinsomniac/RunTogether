var passport = require("passport");
var FitbitStrategy = require("passport-fitbit-oauth2").FitbitOAuth2Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model('users');
const Session = mongoose.model('sessions');

passport.serializeUser((session, done) => {
    console.log("serializeUser", session)
    done(null, session.id);
  });

  passport.deserializeUser((sessionId, done) => {
      console.log("deserialize user here", sessionId)
      Session.findById(sessionId).then(session => {
        console.log("Session found", session)
        done(null, session);
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
      // Create new Session object
      // Session object should have user id an
        console.log(profile)
        // console.log(accessToken)
      User.findOne({ fitbitId: profile.id }).then(currentUser => {
        if (currentUser) {
        //   console.log("user is", currentUser);
        Session.create({ fitbitId: currentUser.fitbitId, accessToken: accessToken})
        .then(session => {
          done(null, session);
        });
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
              Session.create({ fitbitId: newUser.fitbitId, accessToken: accessToken})
              .then(session => {
                done(null, session);
              });
              
            });
            // console.log("access token", accessToken);
            // console.log("refresh token ", refreshToken);
            // console.log("profile:", profile);
        }
      });
    }
));
 

