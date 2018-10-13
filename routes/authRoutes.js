const passport = require('passport');

module.exports = app => {
var fitbitAuthenticate = passport.authenticate('fitbit', {
    scope: ['activity','heartrate','location','profile']
  });
  
  app.get('/auth/fitbit', fitbitAuthenticate);
  app.get('/auth/fitbit/callback', passport.authenticate('fitbit', {
    successRedirect: '/auth/fitbit/success',
    failureRedirect: '/auth/fitbit/failure'
  }));
  
  app.get('/auth/fitbit/success', function(req, res, next) {
    res.send(req.user);
    console.log("USER", req.user);
  })

   //route handler that allows user to logout. kills the cookie and sends the response to show that user is undefined due to logout.
   app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
   });

    //this is a route handler for current user.
    app.get('/api/current_user', (req, res)=>{
        res.send(req.user);
    });
};