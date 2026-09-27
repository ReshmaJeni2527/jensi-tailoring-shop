const Appointment = require("../models/Appointment");

// Basic server-side sanity checks in addition to the Mongoose schema validation.
// The frontend also validates, but the server never trusts the client alone.
const isNonEmptyString = (value) => typeof value === "string" && value.trim().length > 0;

// @route   POST /api/appointments
// @desc    Create a new appointment request
// @access  Public
const createAppointment = async (req, res) => {
  try {
    const { name, phone, email, service, date, time, address, message } = req.body;

    const requiredFields = { name, phone, email, service, date, time, address };
    const missing = Object.entries(requiredFields)
      .filter(([, value]) => !isNonEmptyString(value))
      .map(([key]) => key);

    if (missing.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Please fill in the following required field(s): ${missing.join(", ")}`,
      });
    }

    // Preferred date cannot be in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const chosenDate = new Date(date);
    if (Number.isNaN(chosenDate.getTime()) || chosenDate < today) {
      return res.status(400).json({
        success: false,
        message: "Please choose a valid, upcoming date for your appointment.",
      });
    }

    const appointment = await Appointment.create({
      name,
      phone,
      email,
      service,
      date,
      time,
      address,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Your appointment request has been submitted successfully. We will contact you soon.",
      data: appointment,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ success: false, message: messages.join(" ") });
    }
    console.error("Error creating appointment:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while saving your appointment. Please try again shortly.",
    });
  }
};

// @route   GET /api/appointments
// @desc    Retrieve all appointments (newest first) — useful for verifying submissions
// @access  Public (add authentication before using this in a real production admin panel)
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: appointments.length, data: appointments });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching appointments.",
    });
  }
};

module.exports = { createAppointment, getAppointments };
