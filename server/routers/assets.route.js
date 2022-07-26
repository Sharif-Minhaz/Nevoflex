const { getAssetsController } = require("../controllers/assets.controller");

const router = require("express").Router();

router.get("/", getAssetsController);

module.exports = router;
