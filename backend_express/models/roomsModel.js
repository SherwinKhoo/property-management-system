const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomsSchema = Schema({
  roomID: { type: Number, required: true, unique: true },
  category: { type: String, required: true },
  basePrice: { type: Number, required: true },
  advancedModifier: { type: Number, required: true },
  otaModifier: { type: Number, required: true },
});

const Rooms = mongoose.model("Rooms", roomsSchema);

module.exports = Rooms;
