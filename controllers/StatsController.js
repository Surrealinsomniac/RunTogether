const mongoose = require("mongoose");
const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.Stats
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            console.log(dbModel)
            .catch(err => res.status(422).json(err));
    },
}