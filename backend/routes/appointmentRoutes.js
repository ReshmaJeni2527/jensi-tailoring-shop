const express = require("express");
const router = express.Router();
const { createAppointment, getAppointments } = require("../controllers/appointmentController");

// POST /api/appointments -> create a new appointment
router.post("/", createAppointment);

// GET /api/appointments -> list all appointments (for verification/testing)
router.get("/", getAppointments);

module.exports = router;
