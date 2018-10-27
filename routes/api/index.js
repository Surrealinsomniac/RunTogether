const router = require("express").Router();
const groupRoutes = require("./groupRoutes");

// group; routes
router.use("/groups", groupRoutes);

module.exports = router;