const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Customer name is required"],
      trim: true,
      maxlength: [100, "Name must be under 100 characters"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      // Accepts 10-digit Indian mobile numbers, optionally with +91 / spaces / dashes
      match: [/^(\+91[\-\s]?)?[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"],
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
    },
    service: {
      type: String,
      required: [true, "Please select a service"],
      trim: true,
    },
    date: {
      type: String, // stored as YYYY-MM-DD from the <input type="date">
      required: [true, "Preferred date is required"],
    },
    time: {
      type: String, // stored as HH:mm from the <input type="time">
      required: [true, "Preferred time is required"],
    },
    address: {
      type: String,
      required: [true, "Address / location is required"],
      trim: true,
      maxlength: [300, "Address must be under 300 characters"],
    },
    message: {
      type: String,
      trim: true,
      maxlength: [500, "Message must be under 500 characters"],
      default: "",
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true } // adds createdAt and updatedAt automatically
);

module.exports = mongoose.model("Appointment", appointmentSchema);
