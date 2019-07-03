const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dayClothes = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user" },
  clothes: { type: [Schema.Types.ObjectId], ref: "clothes" },
  day: { type: Date, required: true }
});

const dayClothesModel = mongoose.model("dayClothes", dayClothes);
module.exports = dayClothesModel;
