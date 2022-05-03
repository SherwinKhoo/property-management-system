const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationsSchema = Schema({
  reservationID: { type: String, required: true, unique: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  rooms: [{ type: Number, required: true }],
  payments: [{ type: Number, required: true }],
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const Reservations = mongoose.model("Reservations", reservationsSchema);

module.exports = Reservations;
