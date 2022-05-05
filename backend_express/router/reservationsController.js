const express = require("express");
const mongoose = require("mongoose");
const Reservations = require("../models/reservationsModel");
const router = express.Router();

// search for reservation
router.get("/:id", async (req, res) => {
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

// search for arrivals
router.get("/arrivals/:date", async (req, res) => {
  try {
    const findArrivals = await Reservations.find({
      startDate: `${req.params.date}T00:00:00.000+00:00`,
    }).sort({ lastName: +1 });
    res.json(findArrivals);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

// create new reservation
router.post("/new", async (req, res) => {
  try {
    const newReservation = await Reservations.create(req.body);
    console.log(newReservation);
    res.json(newReservation);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

// udpate reservation
router.put("/:id/update", async (req, res) => {
  try {
    const modifyReservation = await Reservations.updateOne(
      {
        reservationID: req.params.id,
      },
      {
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        rooms: req.body.rooms,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      }
    );
    console.log(modifyReservation);
    res.json(modifyReservation);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

// check-in reservation
router.put("/:id/checkin", async (req, res) => {
  try {
    const checkInReservation = await Reservations.updateOne(
      {
        reservationID: req.params.id,
      },
      {
        isCheckedIn: true,
      }
    );
    console.log(checkInReservation);
    res.json(checkInReservation);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

// cancel reservation
router.put("/:id/cancel", async (req, res) => {
  try {
    const cancelReservation = await Reservations.updateOne(
      {
        reservationID: req.params.id,
      },
      {
        isCancelled: true,
      }
    );
    console.log(cancelReservation);
    res.json(cancelReservation);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

// delete reservation
// as far as i know in hotels, reservations don't get deleted
// just kept in the system as "cancelled"
// even those that are created erroneously
// but this is here just to fulfill CRUD requirements
router.delete("/:id/delete", async (req, res) => {
  try {
    const deleteReservation = await Reservations.deleteOne({
      reservationID: req.params.id,
    });
    console.log(deleteReservation);
    res.json(deleteReservation);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

// seed reservations
router.get("/seed", async (req, res) => {
  const newReservations = [
    {
      reservationID: "r0000001",
      startDate: "2022-05-01",
      endDate: "2022-05-06",
      rooms: [101, 201],
      payments: [100, 200, 100, 200, 100, 200, 100, 200, 100, 200],
      //   userEmail: "guest1@email.com",
      firstName: "Guest1",
      lastName: "One",
    },
    {
      reservationID: "r0000002",
      startDate: "2022-05-02",
      endDate: "2022-05-07",
      rooms: [102, 202],
      payments: [100, 200, 100, 200, 100, 200, 100, 200],
      //   userEmail: "guest2@email.com",
      firstName: "Guest2",
      lastName: "Two",
    },
    {
      reservationID: "r0000003",
      startDate: "2022-05-03",
      endDate: "2022-05-08",
      rooms: [103, 203],
      payments: [100, 200, 100, 200, 100, 200],
      //   userEmail: "guest3@email.com",
      firstName: "Guest3",
      lastName: "Three",
    },
    {
      reservationID: "r0000004",
      startDate: "2022-05-04",
      endDate: "2022-05-09",
      rooms: [104, 204],
      payments: [100, 200, 100, 200],
      //   userEmail: "guest4@email.com",
      firstName: "Guest4",
      lastName: "Four",
    },
    {
      reservationID: "r0000005",
      startDate: "2022-05-05",
      endDate: "2022-05-10",
      rooms: [105, 205],
      payments: [100, 200],
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
