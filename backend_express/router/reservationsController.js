const express = require("express");
const mongoose = require("mongoose");
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
      reservationID: "r0000001",
      startDate: "2022-05-01",
      endDate: "2022-05-06",
      rooms: [101, 201],
      payments: [101, 201, 101, 201, 101, 201, 101, 201, 101, 201],
      //   userEmail: "guest1@email.com",
      firstName: "Guest1",
      lastName: "One",
    },
    {
      reservationID: "r0000002",
      startDate: "2022-05-02",
      endDate: "2022-05-07",
      rooms: [102, 202],
      payments: [102, 202, 102, 202, 102, 202, 102, 202, 102, 202],
      //   userEmail: "guest2@email.com",
      firstName: "Guest2",
      lastName: "Two",
    },
    {
      reservationID: "r0000003",
      startDate: "2022-05-03",
      endDate: "2022-05-08",
      rooms: [103, 203],
      payments: [103, 203, 103, 203, 103, 203, 103, 203, 103, 203],
      //   userEmail: "guest3@email.com",
      firstName: "Guest3",
      lastName: "Three",
    },
    {
      reservationID: "r0000004",
      startDate: "2022-05-04",
      endDate: "2022-05-09",
      rooms: [104, 204],
      payments: [104, 204, 104, 204, 104, 204, 104, 204, 104, 204],
      //   userEmail: "guest4@email.com",
      firstName: "Guest4",
      lastName: "Four",
    },
    {
      reservationID: "r0000005",
      startDate: "2022-05-05",
      endDate: "2022-05-10",
      rooms: [105, 205],
      payments: [105, 205, 105, 205, 105, 205, 105, 205, 105, 205],
      //   userEmail: "guest5@email.com",
      firstName: "Guest5",
      lastName: "Five",
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
