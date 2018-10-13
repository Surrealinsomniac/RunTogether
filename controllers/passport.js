var FitbitStrategy = require( 'passport-fitbit-oauth2' ).FitbitOAuth2Strategy;;
var passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
      User.findById(id).then(user => {
          done(null, user);
      });
  });

  passport.use(
      new FitbitStrategy({
        clientID: keys.fitbit_client_id,
        clientSecret: keys.fitbit_client_secret,
        callbackURL: "http://localhost:5000/auth/fitbit/callback"
      }, 
      async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({fitbitId: profile.id})
        if(existingUser){
            return done(null, existingUser);
        }
        const user = await new User({
            fitbitId: profile.id,
            displayName: req.profile.displayName,
            age: req.profile._json.user.age,
            avgDailySteps: req.profile._json.user.averageDailySteps
        }).save()
        done(null, user);
      }
  )

  );



