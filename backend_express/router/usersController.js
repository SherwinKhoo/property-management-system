const express = require("express");
const bcrypt = require("bcrypt");
const Users = require("../models/usersModel");
const router = express.Router();
const auth = require("../middleware/auth");

const usernameOrPasswordError = {
  status: "error",
  message: "username or password error",
};

router.post("/create", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const createdUser = await Users.create(req.body);

    console.log("created user is:", createdUser);
    res.json({ status: "ok", message: "user created" });
  } catch (error) {
    console.log(error);
    res.status(401).json(usernameOrPasswordError);
  }
});

router.get("/profile", auth, (req, res) => {
  if (req.session.currentUser) {
    res.json({ status: "ok", message: "profile" });
  } else {
    res.status(403).json({ status: "error", message: "please login" });
  }
});

router.delete("/remove", async (req, res) => {
  const { username } = req.body;
  const message = await Users.deleteOne({ username });

  try {
    if (message.deletedCount === 1) {
      res.json({ status: "ok", message: "user deleted" });
    } else {
      res.json({ status: "error", message: "problem with deleting user" });
    }
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/seed", async (req, res) => {
  const newUsers = [
    {
      email: "admin@email.com",
      password: "example",
      firstName: "Admin",
      lastName: "User",
      isStaff: true,
    },
    {
      email: "guest1@email.com",
      password: "example",
      firstName: "Guest1",
      lastName: "One",
    },
    {
      email: "guest2@email.com",
      password: "example",
      firstName: "Guest2",
      lastName: "Two",
    },
    {
      email: "guest3@email.com",
      password: "example",
      firstName: "Guest3",
      lastName: "Three",
    },
    {
      email: "guest4@email.com",
      password: "example",
      firstName: "Guest4",
      lastName: "Four",
    },
    {
      email: "guest5@email.com",
      password: "example",
      firstName: "Guest5",
      lastName: "Five",
    },
  ];

  try {
    const seedUsers = await Users.create(newUsers);
    res.send(seedUsers);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
