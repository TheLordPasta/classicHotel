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
app.use(express.static(path.join(__dirname, "client", "build")));

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

// Catch-all route to serve React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
