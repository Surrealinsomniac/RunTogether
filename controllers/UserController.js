const Users = require("../models/User.js");

module.exports = {
    findAndPop: function(req, res) {
        Users
            .findById(req.params.id)
            .populate("stats")
            .then((dbUser) => {
                res.json(dbUser);
            });
    }
};