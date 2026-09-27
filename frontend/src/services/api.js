import axios from "axios";

// Base URL of the backend API.
// In development this points to the local Express server (see backend/server.js).
// For production, set VITE_API_URL in a .env file at the frontend root, e.g.:
//   VITE_API_URL=https://your-backend-domain.com/api
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Sends a new appointment request to the backend, which saves it to MongoDB.
export const submitAppointment = (appointmentData) => api.post("/appointments", appointmentData);

// Retrieves all saved appointments — useful for testing that submissions were stored.
export const fetchAppointments = () => api.get("/appointments");

export default api;
