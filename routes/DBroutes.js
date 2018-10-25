const Statscontroller = require("../controllers/StatsController.js");


module.exports = app => {
    app.post("/db/stats", (req, res) => {
        Statscontroller.create(req)
            .then((result) => res.json(result))
            .catch((err) => res.status(404));
    })
}