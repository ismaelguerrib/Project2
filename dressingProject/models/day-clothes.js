const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const dayClothesSchema = new Schema({
//   haut: {{clothes.id},required: true },
//   bas: id,
//   shoes: { type: String, required: true },
//   accessoires :
// });

const dayClothes = mongoose.model("dayClothes", dayClothesSchema);
module.exports = dayClothes;
