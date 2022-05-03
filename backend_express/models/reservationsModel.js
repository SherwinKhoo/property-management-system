const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationsSchema = Schema({
  reservationID: { type: String, required: true, unique: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  rooms: [{ type: Number, required: true }],
  payments: [{ type: Number, required: true }],
  userEmail: { type: Schema.Types.ObjectId, ref: "usersModel" },
});

const Reservations = mongoose.model("Reservations", reservationsSchema);

module.exports = Reservations;
