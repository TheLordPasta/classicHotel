import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Room from "./models/room.js";
import cors from "cors";
import path from "path";
import axios from "axios";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Serve static files from React build
const __dirname = path.resolve(); // Needed for ES modules

// API Routes
app.get("/api/rooms", async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    console.error("Error in /api/rooms:", error);
    res.status(500).json({ message: "Error fetching rooms" });
  }
});

// 🔐 Secure Tracking Proxy Route
app.post("/track", async (req, res) => {
  const { client_id, events, token } = req.body;

  // Optional token validation
  if (token !== process.env.TRACKING_TOKEN) {
    return res.status(403).json({ error: "Invalid token" });
  }

  try {
    const response = await axios.post(
      `https://www.google-analytics.com/mp/collect?measurement_id=${process.env.GA_MEASUREMENT_ID}&api_secret=${process.env.GA_API_SECRET}`,
      {
        client_id,
        events,
      }
    );
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Tracking error:", error.response?.data || error.message);
    res.status(500).json({ error: "Tracking failed" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
