const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    lastname: String,
    email: { type: String, unique: true, required: true },
    password: String
  },
  {
    timestamps: true
  }
);

const user = mongoose.model("user", userSchema);
module.exports = User;
