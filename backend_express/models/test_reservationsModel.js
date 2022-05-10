const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationsSchema = Schema({
  reservationID: { type: String, required: true, unique: true },
  rooms: [
    {
      room: { type: Number, required: true },
      starDate: { type: Date, required: true },
      endDate: { type: Date, required: true },
      payments: [
        {
          date: { type: Date, required: true },
          description: { type: String, required: true },
          amount: { type: Number, required: true },
        },
      ],
      guest1: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        NRIC_FIN: { type: String, required: true },
        contact: { type: Number, require: true },
        email: { type: String, required: true },
        address: { type: String },
      },
      guest2: {
        firstName: { type: String },
        lastName: { type: String },
        NRIC_FIN: { type: String },
        contact: { type: Number },
        email: { type: String },
        address: { type: String },
      },
      traces: [
        {
          date: { type: Date, required: true },
          description: { type: String, required: true },
        },
      ],
      isCancelled: { type: Boolean, required: true },
      isCheckedIn: { type: Boolean, required: true },
    },
  ],
});

const Reservations = mongoose.model("Reservations", reservationsSchema);

module.exports = Reservations;
