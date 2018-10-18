const request = require('request');

module.exports = app => {

    app.get('/api/activity/1d', (req, res)=>{
        //all activities for one day
        const URL = 'https://api.fitbit.com/1/user/-/activities/date/today.json';
        
        request({
            url: URL,
            headers: {
                'Authorization': `Bearer ${req.user.accessToken}`
            }
        }, (err, response, body) =>{
            // console.log("Error", err);
            // console.log("Response", response);
            console.log("body", body)
        } );
        // console.log(req.user)
          res.send(req.user);
        //   console.log(req._passport.session.user);
      });

app.get('/api/activity/1w', (req, res)=>{
    //distance for one month. If you want other endpoints-these are the options
    // activities/calories
    // activities/caloriesBMR
    // activities/steps
    // activities/distance
    // activities/floors
    // activities/elevation
    // activities/minutesSedentary
    // activities/minutesLightlyActive
    // activities/minutesFairlyActive
    // activities/minutesVeryActive
    // activities/activityCalories
    const URL = 'https://api.fitbit.com/1/user/-/activities/distance/date/today/1w.json';
    request({
        url: URL,
        headers: {
            'Authorization': `Bearer ${req.user.accessToken}`
        }
    }, (err, response, body) =>{
        // console.log("Error", err);
        // console.log("Response", response);
        console.log("body", body)
    } );
    // console.log(req.user)
      res.send(req.user);
    //   console.log(req._passport.session.user);
  });
  app.get('/api/activity/1m', (req, res)=>{
    //activity for 1 month
    const URL = 'https://api.fitbit.com/1/user/-/activities/distance/date/today/1m.json';
    request({
        url: URL,
        headers: {
            'Authorization': `Bearer ${req.user.accessToken}`
        }
    }, (err, response, body) =>{
        // console.log("Error", err);
        // console.log("Response", response);
        console.log("body", body)
    } );
    // console.log(req.user)
      res.send(req.user);
    //   console.log(req._passport.session.user);
  });
}
