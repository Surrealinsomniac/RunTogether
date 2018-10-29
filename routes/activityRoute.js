const request = require('request');
const Statscontroller = require("../controllers/StatsController.js");
const db = require("../models");

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

            res.send(body); 
        } );

      });


  app.get('/api/activity/1w', (req, res)=>{
      let user = req.user
        const URL = `https://api.fitbit.com/1/user/-/activities/distance/date/today/1w.json`;
        db.User.findOne({ fitbitId: user.fitbitId }).then(dbUser => {
            console.log("DB USER", dbUser)
    request({
        url: URL,
        headers: {
            'Authorization': `Bearer ${req.user.accessToken}`
        }
    }, (err, response, body) => {
        res.send(body)
        let parsedBody = JSON.parse(body);
        let userStats = {
            stats: parsedBody["activities-distance"],
            user: user._id
        };
        console.log(userStats)
        db.Stats.findOneAndUpdate({ user: userStats.user }, userStats  )
        .then(data => console.log(data))
        .catch(err => console.log(err));
    } );
});
});

app.get('/api/activity/1m', (req, res)=>{
      let user = req.user
        const URL = `https://api.fitbit.com/1/user/-/activities/distance/date/today/1m.json`;

    db.User.findOne({ fitbitId: user.fitbitId }).then(dbUser => {
        console.log("DB USER", dbUser)
        console.log(user);
        request({
            url: URL,
            headers: {
                'Authorization': `Bearer ${req.user.accessToken}`
            }
        }, (err, response, body) => {
            console.log("1mBODY:", body)
            res.send(body)
            let parsedBody = JSON.parse(body);
            let userStats = {
                stats: parsedBody["activities-distance"],
                user: user._id
            };
            // console.log(userStats)
            // db.Stats.findOneAndUpdate({ user: userStats.user }, userStats  )
            // .then(data => console.log(data))
            // .catch(err => console.log(err));
        } );
    });
        
});
}
