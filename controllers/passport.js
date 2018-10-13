var FitbitStrategy = require( 'passport-fitbit-oauth2' ).FitbitOAuth2Strategy;;
var passport = require('passport');
const keys = require('../config/keys');

var fitbitStrategy = new FitbitStrategy({
  clientID: keys.fitbit_client_id,
  clientSecret: keys.fitbit_client_secret,
  scope: ['activity','heartrate','location','profile'],
  callbackURL: "http://localhost:5000/auth/fitbit/callback"
}, function(accessToken, refreshToken, profile, done) {
  // TODO: save accessToken here for later use

  done(null, {
    accessToken: accessToken,
    refreshToken: refreshToken,
    profile: profile
  });

});

passport.use(fitbitStrategy);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
