const passport = require('passport');
const mongoose = require("mongoose");
const Session = mongoose.model('sessions');
// const keys = require('../config/keys');


module.exports = app => {
    // app.get('/auth/fitbit',
    // passport.authenticate('fitbit', {
    //     scope: ['activity','heartrate','location','profile']
    // }));
    
     

  
var fitbitAuthenticate = passport.authenticate('fitbit', {failWithError: true, 
    scope: ['activity','heartrate','location','profile']
  });
  
  app.get('/auth/fitbit', fitbitAuthenticate);
  
  app.get('/auth/fitbit/callback', passport.authenticate('fitbit'), 
    (req, res) => {
        res.redirect('/auth/fitbit/success');
    }
  );

// app.get(
//     '/auth/fitbit/callback', 
//     passport.authenticate('fitbit'),
//     //redirect the user to this route upon login
//     (req, res) => {
//         res.redirect('/auth/fitbit/success');
//     }
// );
  
  app.get('/auth/fitbit/success', function(req, res, next) {
    res.send(req.user);
    console.log("successfully logged in");
    console.log(req._passport.session.user)
    console.log("session", req.session)
  })

   //route handler that allows user to logout. kills the cookie and sends the response to show that user is undefined due to logout.
   app.get('/api/logout', (req, res) => {
  console.log("SESSION before logout", req.session)
  console.log("session ID before logout", req.sessionID)
    // req.session = null 
    // req.session.destroy();
    Session.findById(req.user.id).remove(()=> {
      req.session.destroy((err)=>{
        console.log("Session destroy error", err);
        req.logout();
        res.redirect('/');
      })
    })
   
   
    
    console.log("SESSION after logout", req.session)
    console.log("session store after logout", req.sessionStore)
    console.log("session ID after logout", req.sessionID)
    // res.clearCookie(keys.cookieKey);
    
    console.log('====================================');
    console.log("logged out");
    console.log('====================================');
    console.log(req._passport.session.user)
   });

    //this is a route handler for current user.
    app.get('/api/current_user', (req, res)=>{
      console.log(req.user)
        res.send(req.user);
        console.log(req._passport.session.user);
    });
};




