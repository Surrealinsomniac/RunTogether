const router = require("express").Router();
const groupController = require("../../controllers/group");


router.route("/")
  .get(groupController.findUsers)
  .get(groupController.findById)
  //.post(groupController.create);


router.route("/:id")
  .get(groupController.findById)
  .put(groupController.update)
  .delete(groupController.remove);

module.exports = router;