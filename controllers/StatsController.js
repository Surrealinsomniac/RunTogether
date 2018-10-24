const mongoose = require("mongoose");
const Stats = require("../models/Stats.js");

module.exports = {
    create: function (req, res) {
        Stats
            .create(req.body)
            .catch(err => res.status(422).json(err));
    },
}