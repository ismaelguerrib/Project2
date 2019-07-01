const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clothesSchema = new Schema({
  name: { type: String },
  brand: String,
  size: String,
  type: { type: Schema.Types.ObjectId, ref: "Type" },
  price: { type: Number },
  addeddate: { type: Number },
  weareddate: { type: Number },
  season: { type: String },
  img: { type: String, default: "public/images/black-tee.png" }
});

const Clothes = mongoose.model("Clothes", clothesSchema);
module.exports = Clothes;
