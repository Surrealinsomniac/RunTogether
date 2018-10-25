const router = require("express").Router();
const groupController = require("../../controllers/group");


router.route("api/groups/:id")
  .get(groupController.findUsers)
  .get(groupController.findById)
  .post(groupController.create);


router.route("/:id")
  .get(groupController.findById)
  .delete(groupController.remove);

module.exports = router;