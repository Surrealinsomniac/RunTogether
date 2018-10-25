const mongoose = require("mongoose");
const db = require("../models");
const keys = require('../config/keys');

// This file empties the Books collection and inserts the books below
//keys.mongoURI
mongoose.connect( process.env.MONGODB_URI ||
  keys.mongoURI
);

const groupSeed = [
    {
      name: "Park Runners",
      bio: "A group that likes to run the park at odd hours.  We like to run together so we don't get robbed.  Strength in numbers!",
      users: ["5bcfc654b8ff125260dd5e16"]
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
