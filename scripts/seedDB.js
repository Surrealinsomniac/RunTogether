const mongoose = require("mongoose");
const db = require("../models");
const keys = require('../config/keys');

// This file empties the Books collection and inserts the books below
//keys.mongoURI
mongoose.connect(keys.mongoURI);

const groupSeed = [
    {
      name: "Park Runners",
      bio: "A group that likes to run the park at odd hours.  We like to run together so we don't get robbed.  Strength in numbers!",
      users: []
    }
];
const userSeed = [
  {
      fitbitId: "AjaraapAA4563",
      displayName: "Bobba Booey",
      age: 85,
      avgDailySteps: 4500,
      group: []
  }
];
const statSeed = [{ stats:
  [ { dateTime: '2018-09-27', value: '0.0' },
    { dateTime: '2018-09-28', value: '0.0' },
    { dateTime: '2018-09-29', value: '0.0' },
    { dateTime: '2018-09-30', value: '0.0' },
    { dateTime: '2018-10-01', value: '0.0' },
    { dateTime: '2018-10-02', value: '0.0' },
    { dateTime: '2018-10-03', value: '0.0' },
    { dateTime: '2018-10-04', value: '0.0' },
    { dateTime: '2018-10-05', value: '0.0' },
    { dateTime: '2018-10-06', value: '0.0' },
    { dateTime: '2018-10-07', value: '0.0' },
    { dateTime: '2018-10-08', value: '0.0' },
    { dateTime: '2018-10-09', value: '0.0' },
    { dateTime: '2018-10-10', value: '0.0' },
    { dateTime: '2018-10-11', value: '0.0' },
    { dateTime: '2018-10-12', value: '0.0' },
        { dateTime: '2018-10-13', value: '0.0' },
        { dateTime: '2018-10-14', value: '0.0' },
       { dateTime: '2018-10-15', value: '3.21868' },
    { dateTime: '2018-10-16', value: '1.60934' },
    { dateTime: '2018-10-17', value: '1.60934' },
    { dateTime: '2018-10-18', value: '1.2069999999999999' },
    { dateTime: '2018-10-19', value: '6.43737' },
    { dateTime: '2018-10-20', value: '6.43737' },
    { dateTime: '2018-10-21', value: '0.0' },
    { dateTime: '2018-10-22', value: '0.0' },
    { dateTime: '2018-10-23', value: '0.0' },
    { dateTime: '2018-10-24', value: '0.0' },
    { dateTime: '2018-10-25', value: '0.0' },
    { dateTime: '2018-10-26', value: '0.0' },
    { dateTime: '2018-10-27', value: '0.0' } ],
 user: "5bd4a76a61f0672b78a658e0" }
]
db.Group
  .remove({})
  .then(() => db.Group.collection.insert(groupSeed))
  .then(data => {
    console.log(data.result.n + " groupss inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.User
  .remove({})
  .then(() => db.User.collection.insert(userSeed))
  .then(data => {
    console.log(data.result.n + " users inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  db.Stats
  .remove({})
  .then(() => db.Stats.collection.insert(statSeed))
  .then(data => {
    console.log(data.result.n + " stats inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });