import mongoose from "mongoose";
import Poison from "../models/poison.model.js";

// Get ALL
export const getPoisons = async (req, res) => {
  try {
    const poisons = await Poison.find({});
    res.status(200).json({ status: true, data: poisons });
  } catch (error) {
    console.error("Error in fetching data: ", error.message);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

// CREATE
export const createPoison = async (req, res) => {
  const { part, ingredients, description } = req.body;

  if (!part || !ingredients || !description) {
    return res
      .status(400)
      .json({ status: false, message: "Please provide all required fields" });
  }

  const newPoison = new Poison(req.body);

  try {
    await newPoison.save();
    res.status(201).json({ status: true, data: newPoison });
  } catch (error) {
    console.error("Error in create poison : ", error.message);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

// UPDATE
export const updatedPoison = async (req, res) => {
  const { id } = req.params;
  const poison = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ status: false, message: "Invalid Product ID" });
  }

  try {
    const updatedPoison = await Poison.findByIdAndUpdate(id, poison, {
      new: true,
    });
    res.status(200).json({ status: true, data: updatedPoison });
  } catch (error) {
    console.error("Error in updating poison: ", error.message);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

// DELETE
export const deletePoison = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ status: false, message: "Invalid Product ID" });
  }

  try {
    await Poison.findByIdAndDelete(id);
    res.status(200).json({ status: true, message: "Product deleted" });
  } catch (error) {
    console.error("Error in deleting product: ", error.message);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};
