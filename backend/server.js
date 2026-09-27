require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

// Connect to MongoDB before accepting requests
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim());

app.use(
  cors({
    origin: allowedOrigins,
  })
);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Jensi Tailoring Shop API is running." });
});

// API routes
app.use("/api/appointments", appointmentRoutes);

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

// Central error handler (catches anything thrown/passed via next(err))
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal server error." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
