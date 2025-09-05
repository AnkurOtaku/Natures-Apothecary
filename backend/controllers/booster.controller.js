import mongoose from "mongoose";
import Booster from "../models/booster.model.js";

// Get ALL
export const getBoosters = async (req, res) => {
  try {
    const boosters = await Booster.find({});
    res.status(200).json({ status: true, data: boosters });
  } catch (error) {
    console.error("Error in fetching data: ", error.message);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

// CREATE
export const createBooster = async (req, res) => {
  const { name, part, expiry, recipe, forKids, dosage } = req.body;

  if (!name || !part || !expiry || !recipe || !forKids || !dosage) {
    return res
      .status(400)
      .json({ status: false, message: "Please provide all required fields" });
  }

  const newBooster = new Booster(req.body);

  try {
    await newBooster.save();
    res.status(201).json({ status: true, data: newBooster });
  } catch (error) {
    console.error("Error in create booster : ", error.message);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

// UPDATE
export const updatedBooster = async (req, res) => {
  const { id } = req.query;
  const booster = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ status: false, message: "Invalid Product ID" });
  }

  try {
    const updatedBooster = await Booster.findByIdAndUpdate(id, booster, {
      new: true,
    });
    res.status(200).json({ status: true, data: updatedBooster });
  } catch (error) {
    console.error("Error in updating booster: ", error.message);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

// DELETE
export const deleteBooster = async (req, res) => {
  const { id } = req.query;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ status: false, message: "Invalid Product ID" });
  }

  try {
    await Booster.findByIdAndDelete(id);
    res.status(200).json({ status: true, message: "Product deleted" });
  } catch (error) {
    console.error("Error in deleting product: ", error.message);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};
