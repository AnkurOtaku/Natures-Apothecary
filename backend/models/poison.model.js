import mongoose from "mongoose";

const poisonSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    part: { type: String, required: true },
    ingredients: { type: [String], required: true },
    description: { type: [String], required: false },
  },
  { timestamps: true }
);

const Poison = mongoose.model("Poison", poisonSchema);

export default Poison;