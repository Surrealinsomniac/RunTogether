const request = require('request');
const Statscontroller = require("../controllers/StatsController.js");

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
            // console.log("body", body)
            res.send(body); 
        } );
        // console.log(req)
        //   res.send(req.user);
        //   console.log(req._passport.session.user);
      });

// app.get('/api/activity/1w', (req, res)=>{
//     //distance for one month. If you want other endpoints-these are the options
//     // activities/calories
//     // activities/caloriesBMR
//     // activities/steps
//     // activities/distance
//     // activities/floors
//     // activities/elevation
//     // activities/minutesSedentary
//     // activities/minutesLightlyActive
//     // activities/minutesFairlyActive
//     // activities/minutesVeryActive
//     // activities/activityCalories
//     const URL = 'https://api.fitbit.com/1/user/-/activities/distance/date/today/1w.json';
//     request({
//         url: URL,
//         headers: {
//             'Authorization': `Bearer ${req.user.accessToken}`
//         }
//     }, (err, response, body) =>{
//         // console.log("Error", err);
//         // console.log("Response", response);
//         console.log("body", body)
//     } );
//     // console.log(req.user)
//       res.send(req.user);
//     //   console.log(req._passport.session.user);
//   });
  app.get('/api/activity/:activityLength', (req, res)=>{
    //   console.log("richard is dumb" + req.user)
      let user = req.user
    //activity for 1 month
    if (/[1m|1w]/.test(req.params.activityLength)) {
        const { activityLength } = req.params;
        const URL = `https://api.fitbit.com/1/user/-/activities/distance/date/today/${activityLength}.json`;
    request({
        url: URL,
        headers: {
            'Authorization': `Bearer ${req.user.accessToken}`
        }
    }, (err, response, body) => {
        let parsedBody = JSON.parse(body);
        let userStats = {
            stats: parsedBody["activities-distance"],
            user: user._id
        };
            console.log(Statscontroller);
            console.log(userStats)
            Statscontroller.create(userStats)
                .catch((err) => res.status(405));

    } );
    // console.log(req.user)
      res.send(req.user);
    //   console.log(req._passport.session.user);
 
    } else {
        res.send("Route doesnt exist")
    }
});
}
