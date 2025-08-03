import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    basePrice: { type: Number, required: true },
    description: { type: String, required: true },
  },
  { collection: "Rooms" } // ✅ Force Mongoose to use "Rooms" instead of "rooms"
);

const Room = mongoose.model("Room", RoomSchema);

export default Room;
