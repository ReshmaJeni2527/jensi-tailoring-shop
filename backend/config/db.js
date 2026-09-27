const mongoose = require("mongoose");

// Connects to MongoDB using the connection string from the environment.
// The app exits if the connection string is missing or the connection fails,
// since nothing in this API works without a database.
const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error(
      "MONGODB_URI is not set. Create a .env file in /backend (see .env.example) " +
        "and set MONGODB_URI to your MongoDB connection string."
    );
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
