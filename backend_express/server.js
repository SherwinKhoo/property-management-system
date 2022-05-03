const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const connectDB = require("./db/db");
const users = require("./router/users");
const PORT = process.env.PORT || 5001;

const app = express();

// allow the system to read the .env file
require("dotenv").config();

const storeSession = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: "sessions",
});

app.use(
  session({
    secret: process.env.SECRET,
    // default is true
    // true: every time, a new request will be created
    // false: use previous till expire
    resave: false,
    // false: don't save if this session is not updated
    saveUninitialized: false,
    // in milliseconds
    maxAge: 24 * 60 * 60 * 1000,
    store: storeSession,
  })
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB(process.env.MONGODB_URI);

app.use("/users", users);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
