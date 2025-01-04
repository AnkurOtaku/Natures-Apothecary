import mongoose from "mongoose";

const boosterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    part: { type: String, required: true },
    ingredients: { type: [String], required: true }, // Optional
    expiry: { type: String, required: true },
    recipe: { type: [String], required: true },
    caution: { type: [String], required: false }, // Optional
    dosage: { type: String, required: true },
    forKids: { type: String, required: true },
  },
  { timestamps: true }
);

const Booster = mongoose.model("Booster", boosterSchema);

export default Booster;