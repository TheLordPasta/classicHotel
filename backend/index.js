import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Room from "./models/room.js";
import cors from "cors";
import path from "path";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "https://thetailortlv.com",
    methods: ["POST", "GET"],
    credentials: true,
  })
);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Root route for sanity check
app.get("/", (req, res) => {
  res.send("🚀 API is live. Try /api/rooms");
});

// API: Get rooms
app.get("/api/rooms", async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    console.error("❌ Error in /api/rooms:", error);
    res.status(500).json({ message: "Error fetching rooms" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
