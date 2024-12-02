const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", controller.main);

router.get("/visitors", controller.visitor);

module.exports = router;
