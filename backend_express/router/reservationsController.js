const express = require("express");
const Reservations = require("../models/reservationsModel");
const router = express.Router();

// search for reservation
router.get("/reservations/:id", async (req, res) => {
  try {
    const findReservation = await Reservations.find({
      reservationID: req.params.id,
    });
    res.json(findReservation);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

router.get("/seed", async (req, res) => {
  const newReservations = [
    {
      reservationID: r0000001,
      startDate: "2022-05-01",
      endDate: "2022-05-06",
      rooms: [101, 201],
      payments: [100, 100, 100, 100, 100],
      userEmail: "guest1@email.com",
    },
  ];

  try {
    const seedReservations = await Reservations.create(newReservations);
    res.send(seedReservations);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
