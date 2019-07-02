const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clothesSchema = new Schema({
  name: { type: String },
  brand: String,
  size: String,
  type: { type: String, enum: ["Top", "Jean"] },
  price: { type: Number },
  addeddate: { type: Date },
  weareddate: { type: Date },
  season: { type: String },
  imgPath: String,
  imgName: String
});

const Clothes = mongoose.model("Clothes", clothesSchema);
module.exports = Clothes;
