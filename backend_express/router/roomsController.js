const express = require("express");
const mongoose = require("mongoose");
const Rooms = require("../models/roomsModel");
const router = express.Router();

// search for price
router.get("/:room/base-price", async (req, res) => {
  try {
    const findPrice = await Rooms.find({
      roomID: req.params.room,
    });
    res.json(findPrice);
  } catch (error) {
    console.log(error);
    res.json("error");
  }
});

module.exports = router;
