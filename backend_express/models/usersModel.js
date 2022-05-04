const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, default: "example" },
  firstName: { type: String, require: true },
  lastName: { type: String, required: true },
  isStaff: { type: Boolean, default: false },
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
