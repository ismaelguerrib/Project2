const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clothesSchema = new Schema({
  name: { type: String, required: true },
  brand: String,
  size: String,
  type: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  addeddate: { type: Number, required: true },
  weareddate: { type: Number, required: true },
  season: { type: String, required: true }
});

const Clothes = mongoose.model("Clothes", clothesSchema);
module.exports = Clothes;
