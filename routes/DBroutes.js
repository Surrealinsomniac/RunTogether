const Statscontroller = require("../controllers/StatsController.js");
const db = require("../models");

module.exports = app => {
  app.post("/db/stats", (req, res) => {
    Statscontroller.create(req)
      .then(result => res.json(result))
      .catch(err => res.status(404));
  });

  app.get("/api/users", (req, res) => {
    const displayName = req.query.displayName;

    db.User.find({ displayName: { $regex: new RegExp(displayName), $options: 'i' } })
      .then(users => res.json(users))
      .catch(err => res.json(err));
  });
};
