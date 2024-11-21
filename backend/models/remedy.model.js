import mongoose from "mongoose";

const remedySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    part: { type: String, required: true },
    ingredients: { type: [String], required: true }, // Optional
    expiry: { type: String, required: true },
    forKids: { type: String, required: true },
    recipe: { type: [String], required: true },
    caution: { type: [String], required: false }, // Optional
  },
  { timestamps: true }
);

const Remedy = mongoose.model("Remedy", remedySchema);

export default Remedy;
