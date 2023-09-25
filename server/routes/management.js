const express = require("express");
const {
  getAdmins,
  getUserPerformance,
} = require("../controllers/managementController.js");

const router = express.Router();

router.get("/admins", getAdmins);
router.get("/performance/:id", getUserPerformance);
router.get("/department");

module.exports = router;
