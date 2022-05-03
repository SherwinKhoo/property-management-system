const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");
// const connectDB = require("./db/db");
const PORT = 5001;

const app = express();

// allow the system to read the .env file
require("dotenv").config();

const storeSession = new MongoDBStore({
  uri: "mongodb://127.0.0.1:27017/project4",
  collection: "sessions",
});

app.use(
  session({
    secret: "secretbutactuallynotsecret",
    resave: false,
    saveUninitialized: false,
    maxAge: 24 * 60 * 60 * 1000,
    store: storeSession,
  })
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://127.0.0.1:27017/project4");
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

const usersController = require("./router/usersController.js");
const reservationsController = require("./router/reservationsController.js");
const sessionsController = require("./router/sessionsController.js");
app.use("/users", usersController);
app.use("/reservations", reservationsController);
app.use("/sessions", sessionsController);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
