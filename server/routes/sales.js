const express = require("express");
const { getSales } = require("../controllers/salesController.js");

const router = express.Router();

router.get("/sales", getSales);

module.exports = router;
