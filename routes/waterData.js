const express = require("express");
const router = express.Router();
const waterData = require("../controllers/waterData/waterData");

router.get("/:ownerId/water-data", waterData);

module.exports = router;
