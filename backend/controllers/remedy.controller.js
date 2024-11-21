import Remedy from "../models/remedy.model.js";
import mongoose from "mongoose";

// Get ALL
export const getRemedies = async (req, res) => {
  try {
    const remedies = await Remedy.find({});
    res.status(200).json({ status: true, data: remedies });
  } catch (error) {
    console.error("Error in fetching data: ", error.message);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

// CREATE
export const createRemedy = async (req, res) => {
  const { name, part, expiry, recipe, forKids } = req.body;

  if (!name || !part || !expiry || !recipe || !forKids) {
    return res
      .status(400)
      .json({ status: false, message: "Please provide all required fields" });
  }

  const newRemedy = new Remedy(req.body);

  try {
    await newRemedy.save();
    res.status(201).json({ status: true, data: newRemedy });
  } catch (error) {
    console.error("Error in create remedy : ", error.message);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

// UPDATE
export const updatedRemedy = async (req, res) => {
  const { id } = req.params;
  const remedy = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ status: false, message: "Invalid Product ID" });
  }

  try {
    const updatedRemedy = await Remedy.findByIdAndUpdate(id, remedy, {
      new: true,
    });
    res.status(200).json({ status: true, data: updatedRemedy });
  } catch (error) {
    console.error("Error in updating product: ", error.message);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

// DELETE
export const deleteRemedy = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ status: false, message: "Invalid Product ID" });
  }

  try {
    await Remedy.findByIdAndDelete(id);
    res.status(200).json({ status: true, message: "Product deleted" });
  } catch (error) {
    console.error("Error in deleting product: ", error.message);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};
