var express = require("express");
var router = express.Router();
var controller = require('../controller/user.controller.js');
router.get("/", controller.index);
router.get("/create", controller.create);
router.get("/:id/update", controller.update);
router.get("/:id/delete", controller.delete);

router.post("/create", controller.postCreate);
router.post("/:id/update", controller.postUpdate);
router.post("/:id/delete", controller.postDelete);
module.exports = router;